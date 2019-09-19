

const anagram = (arrayWords) => {
    const object = {}
    
    for (let word of arrayWords) {
        let sorted = [...word.toLowerCase()].sort().join("");
        if (object[sorted] !== undefined) {
            object[sorted].push(word)
            object[sorted].sort()
        } else {
            object[sorted] = new Array()
            object[sorted].push(word)
        }
    }
    const result = new Array()
    for (field in object) {
        if (object[field].length > 1) {
            result.push(object[field])
        }
    }


    return result.sort();
}
