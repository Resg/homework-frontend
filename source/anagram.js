

const anagram = (arrayWords) => {
    const anagramMap = arrayWords.reduce((result, word) =>
        ({
            ...result, [[...word.toLowerCase()].sort().join("")]:
                result.hasOwnProperty([...word.toLowerCase()].sort().join(""))?[...result[[[...word.toLowerCase()].sort().join("")]], word] : [word]
    }), {});


    const result = Object.values(anagramMap).reduce((result, value) => { return ((value.length > 1) ? [...result, value.sort()]: result) }, []);
    console.log(result);

    return result.sort();
};
