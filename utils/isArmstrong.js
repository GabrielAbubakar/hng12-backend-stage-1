module.exports = function isArmstrong(n) {
    const result = []
    // divide the number by its digits
    // add each digit raise to power the number of digits
    // check if its equals the number
    const numArr = n.toString().split('').map(Number)
    const numTotal = numArr.reduce((acc, curr) => acc + Math.pow(curr, numArr.length), 0)

    if (numTotal == n) {
        result.push('armstrong')
    }

    if (n % 2 == 0) {
        result.push('even')
    }

    if (n % 2 !== 0) {
        result.push('odd')
    }

    return result
}