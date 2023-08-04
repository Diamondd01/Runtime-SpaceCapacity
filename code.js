//runtime = O(n)
function hasZeroSumPair(numbers) {
    const numSet = new Set();

    for (const num of numbers) {
        if (numSet.has(-num)) {
            return true; 
        }
        numSet.add(num);
    }

    return false; 

const array2 = [1, 2, 3];
console.log(hasZeroSumPair(array2))}


function hasUniqueCharacters(word) {
    const charSet = new Set();

    for (const char of word) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }

    return true; 
}
const word1 = "Diamond";
console.log(hasUniqueCharacters(word1))
//runtime = O(n)

function isPangram(sentence) {
    const alphabetSet = new Set();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (const char of sentence.toLowerCase()) {
        if (alphabet.includes(char)) {
            alphabetSet.add(char);
        }
    }

    return alphabetSet.size === 26; 
}
//runtime = O(n)

function findLongestWord(wordList) {
    let longestLength = 0;

    for (const word of wordList) {
        if (word.length > longestLength) {
            longestLength = word.length;
        }
    }

    return longestLength;
}
const words = ["Diamond", "Blue", "Apples", "dragonfruit", "Flower"];
console.log(findLongestWord(words)); 

//runtime = O(n)
