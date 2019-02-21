function anagrams(word, words) {
    return word.split('').sort().join('') === words.split('').sort().join('');
}

let word = "monk";
let words = "nmok";
console.log(anagrams(word,words));

