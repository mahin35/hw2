const filterOdd = (nums) => {
    function filterOdd (num) {
        return (num % 2 !== 0)
    }

    return nums.filter(filterOdd)
}

console.log(filterOdd([1,2,3,2])) // [ 1, 3 ]


//or....

const filterOdd2 = (nums) => {
    let filterArray = [],
        element
    for (element of nums) {
        if (element % 2 !== 0) {
            filterArray.push(element)
        }

    }

    return filterArray // This method feels more intuitive
}

console.log(filterOdd2([2,2,4,5,9,21122,13,7,8])) // [ 5, 9, 13, 7 ]

module.exports = filterOdd;