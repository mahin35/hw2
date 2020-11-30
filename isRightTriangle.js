const isRightTriangle = (a, b, c) => (a**2 +b**2 === c**2)

module.exports = isRightTriangle;

console.log(isRightTriangle(3,4,6)) // False
console.log(isRightTriangle(3,4,5)) //True
