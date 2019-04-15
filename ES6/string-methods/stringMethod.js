
let strToSearch = 'a really long hyphenated string';

console.log(/^a really/.test(strToSearch));
console.log(strToSearch.indexOf('a really') === 0);
// es6
console.log(strToSearch.startsWith('a really')); 
console.log(strToSearch.startsWith('lly', 5)); 

console.log(/hyphenated string$/.test(strToSearch));
console.log(strToSearch.indexOf('hyphenated string') === strToSearch.length - 'hyphenated string'.length);
// es6
console.log(strToSearch.endsWith('hyphenated string')); 
console.log(strToSearch.endsWith('hyphena', 21)); 


console.log(/long/.test(strToSearch));
console.log(strToSearch.indexOf('long') > -1);
// es6
console.log(strToSearch.includes('long')); //es6