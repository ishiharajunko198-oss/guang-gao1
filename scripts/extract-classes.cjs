const fs = require('fs');

const html = fs.readFileSync('dist/exported.html', 'utf8');

const startLine = 10209;
const endLine = 10629;

const lines = html.split('\n');
const sectionHtml = lines.slice(startLine - 1, endLine - 1).join('\n');

const classRegex = /class="([^"]+)"/g;
const uniqueClasses = new Set();
let match;

while ((match = classRegex.exec(sectionHtml)) !== null) {
  const classes = match[1].split(/\s+/);
  classes.forEach(c => uniqueClasses.add(c));
}

const classList = Array.from(uniqueClasses).sort();
console.log('Unique classes found:', classList.length);
console.log(classList.join('\n'));