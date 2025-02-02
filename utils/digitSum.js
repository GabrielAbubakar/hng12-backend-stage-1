module.exports = function digitSum(n) {
    return n.toString().split('').map(Number).reduce((acc, curr) => acc + curr, 0)
}