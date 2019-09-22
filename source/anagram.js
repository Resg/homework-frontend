

const anagram = (arrayWords) => {
    const anagramMap = {};
    arrayWords.reduce((previousValue, word) =>  {
        let sorted = [...word.toLowerCase()].sort().join("");
        if (anagramMap[sorted]) {
            anagramMap[sorted].push(word);
            anagramMap[sorted].sort();
        } else {
            anagramMap[sorted] = [];
            anagramMap[sorted].push(word);
        }
    }, '');

    const result = [];
    Object.values(anagramMap).reduce( (previousValue, value) => {
        if (value.length > 1) {
            result.push(value);
        }
    }, '');



    return result.sort();
}
