let fibonacciNums = (len) => {

   if (len <= 0) {
       return [];
   } else if (len === 1 ) {
       return [0];
   } else if (len === 2) {
       return [0,1]
   }

   let result = [0,1]

    let num1 = result[0],
        num2 = result[1],
        next,
        count = 2;

    while (count < len) {
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        result.push(next)
        count++
    }

    return result
};

module.exports = fibonacciNums;

console.log(fibonacciNums(4)) // [ 0, 1, 1, 2 ]

