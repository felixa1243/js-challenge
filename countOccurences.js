function countOccurrences(INPUT, QUERY) {
    return QUERY.map(queryWord => {
        return INPUT.filter(inputWord => inputWord === queryWord).length;
    });
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
const result = countOccurrences(INPUT, QUERY);
console.log(result);
