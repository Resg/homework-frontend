

const anagram = function (arrayWords) {
    let map = new Map();
    
    for (let word of arrayWords) {
        let sorted = word.toLowerCase().split("").sort().join("");
        if (map.has(sorted)){
            let arr = map.get(sorted);
            arr.push(word);
            arr.sort();
            map.set(sorted, arr);
        }
        else {
            let arr = new Array()
            arr.push(word);
            map.set(sorted, arr)
        }
    }
    map.forEach(function (value, key, map) {
        if (value.length < 2) {
            map.delete(key);
        }
    });
    return Array.from( map.values()).sort();
}
