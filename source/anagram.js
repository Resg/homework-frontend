const anagram = (arrayWords) => {
    const anagramMap = arrayWords.reduce((result, word) =>
        {
            const sorted = [...word.toLowerCase()].sort().join("");
            return {
                ...result,
                [sorted]: result.hasOwnProperty(sorted) ? [...result[sorted], word] : [word]
            }
    }, {});
    const result = Object.values(anagramMap).reduce((result, value) => ( (value.length > 1) ? [...result, value.sort()] : result ), []);
    return result.sort();
};