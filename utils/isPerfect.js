module.exports = function isPerfect(n) {
    const divisors = []

    // for (let i = 0; i < n; i++) {
    //     if (n % i === 0) {
    //         divisors.push(i)
    //     }
    // }

    // More optimized loop (over the square root of the number)
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) { // i is a divisor
            divisors.push(i); // Add i to the divisors array
            if (i !== n / i && n / i !== n) { // Avoid adding the number itself
                divisors.push(n / i); // Add the corresponding divisor (number / i)
            }
        }
    }

    const total = divisors.reduce((acc, curr) => acc + curr, 0)

    if (total == n) {
        return true
    }

    return false
}