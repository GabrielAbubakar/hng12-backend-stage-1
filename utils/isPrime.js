module.exports = function isPrime(n) {
    if (n < 2) return false; // 0 and 1 are not prime
    if (n === 2) return true; // 2 is the only even prime number
    if (n % 2 === 0) return false; // Eliminate even numbers > 2

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false; // Found a divisor, not prime
    }
    return true;
}