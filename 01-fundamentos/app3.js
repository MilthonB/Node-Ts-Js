const fs = require('fs');



const content = fs.readFileSync('README.md','utf8');

const wordCount = content.split(' ');


const reactWordCount1 = wordCount.filter(e => e.toLocaleLowerCase().includes('react')  )
const reactWordCount2 = content.match(/react/gi ?? []).length

console.log('Palabras: ',wordCount.length)
console.log('Palabras react - Filter: ',reactWordCount1.length);
console.log('Palabras react - Match: ',reactWordCount2);



















