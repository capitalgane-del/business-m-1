#!/usr/bin/env node
// Turns a filled-in template into the static page you deploy: every word is already
// in the HTML, and the only JavaScript left is the slider, scroll reveal and form.
//
//   node build.js <client.html> [output.html]
//
// Output defaults to dist/<client>/index.html. No npm install needed.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const fail = msg => { console.error("Build failed: " + msg); process.exit(1); };
const [input, outArg] = process.argv.slice(2);
if (!input) fail("no input file.\nUsage: node build.js <client.html> [output.html]");

let html = fs.readFileSync(input, "utf8");

// Pull out the preview-only scripts. The behaviour script stays in the page.
const scripts = {};
html = html.replace(/<script id="(content|preview|render)">([\s\S]*?)<\/script>\n?/g, (m, id, src) => {
  scripts[id] = src;
  return "";
});
["content", "render"].forEach(id => {
  if (!scripts[id]) fail('no <script id="' + id + '"> found. Is this file made from the template?');
});

// Run the same renderer the browser preview uses, without a browser.
const sandbox = {};
try {
  vm.runInNewContext(scripts.content + "\n" + scripts.render + "\nthis.__out = { content, page: renderPage(content) };", sandbox);
} catch (err) {
  fail("the content object has an error: " + err.message);
}
const { content: c, page } = sandbox.__out;

const esc = s => String(s).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
const cssVal = s => String(s).replace(/[<>;{}"\\]/g, "");
const swap = (re, fn, what) => {
  if (!re.test(html)) fail("could not find " + what + " in the template.");
  html = html.replace(re, fn); // function replacements, so "$" in copy is never treated as a pattern
};

swap(/<title>[\s\S]*?<\/title>/, () => "<title>" + esc(c.pageTitle) + "</title>", "<title>");
swap(/<meta name="description" content="[^"]*">/, () => '<meta name="description" content="' + esc(c.metaDescription) + '">', "the description meta tag");
swap(/<meta name="theme-color" content="[^"]*">/, () => '<meta name="theme-color" content="' + esc(c.colours.primary) + '">', "the theme-color meta tag");

const vars = ["--color-primary: " + cssVal(c.colours.primary), "--on-primary: " + cssVal(c.colours.onPrimary)];
if (c.heroImage) {
  vars.push('--hero-image: url("' + String(c.heroImage).replace(/"/g, "%22").replace(/</g, "%3C") + '")');
  swap(/<html([^>]*)>/, (m, attrs) => "<html" + attrs + ' data-hero-image="true">', "<html>");
}
swap(/<\/head>/, () => "<style>:root { " + vars.join("; ") + "; }</style>\n</head>", "</head>");

swap(/<noscript>[\s\S]*?<\/noscript>\n?/, () => "", "<noscript>");
swap(/<div id="app"><\/div>/, () => '<div id="app">\n' + page + "\n</div>", '<div id="app"></div>');

const out = outArg || path.join("dist", path.basename(input, path.extname(input)), "index.html");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, html);
console.log("Built " + out + " (" + (Buffer.byteLength(html) / 1024).toFixed(1) + " KB)");

// Checks that catch the mistakes that cost you a client.
const warn = [];
if (c.sample) warn.push("sample is true: the red SAMPLE ribbon is on the page. Set it to false once everything is real.");
if (!c.web3formsKey || /YOUR_/.test(c.web3formsKey)) warn.push("web3formsKey is not set: the contact form will not send.");
(function walk(v, at) {
  if (typeof v === "string") { if (v.includes("\u2014")) warn.push("em dash in " + at + ": use a comma, a colon or a full stop."); }
  else if (v && typeof v === "object") Object.entries(v).forEach(([k, x]) => walk(x, at ? at + "." + k : k));
})(c, "");
warn.forEach(w => console.warn("  WARNING " + w));
