const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const wordCount = content.split(' ').length;

console.log('Palabras: ', wordCount);

const reactWordCount = content.match(/react/gi).length;

const words = content.split(' ');
const reactWordCount2 = words.filter(word => word.toLowerCase().includes('react')).length;

console.log('Palabras React: ', reactWordCount);
