function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

let str = "This is someone else\'s shit NIGGA";
console.log(disemvowel(str));
