var _ = require('lodash');

const isRightTriangle = (a, b, c) => {
    if (a === 0 || b === 0 || c === 0) return false;
    let args = [a, b, c];
    let randomNumber = _.sample(args);
    for (let i = 0; i < 10000; i++) {
        let random1 = _.sample(args);
        let random2 = _.sample(args);
        let random3 = _.sample(args);

        if (random1 ** 2 + random2 ** 2 === random3 ** 2) {
            return true;
        }
    }
    return false;
}

module.exports = isRightTriangle;

console.log(isRightTriangle(3,4,6)) //False
console.log(isRightTriangle(3,4,5)) //True
console.log(isRightTriangle(4,5,3)) //True
console.log(isRightTriangle(0,0,0)) //False

