const isRightTriangle = (a, b, c) => {
    if (a === 0 || b === 0 || c === 0) return false;
    return (a**2 +b**2 === c**2);
}

module.exports = isRightTriangle;

console.log(isRightTriangle(3,4,6)) //False
console.log(isRightTriangle(3,4,5)) //True
console.log(isRightTriangle(0,0,0)) //False