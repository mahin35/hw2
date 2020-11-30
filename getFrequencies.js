const getFrequencies = (nums) => {
    let result = {}
    for (element of nums) {
        if (element in result) {
            result[element]++
        } else {
            result[element] = 1
        }
    }
    return result
}

module.exports = getFrequencies;

console.log(getFrequencies([1,2,2])) // { '1': 1, '2': 2 }