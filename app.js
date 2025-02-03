const express = require('express')
const axios = require('axios')
const compression = require('compression');
const isPrime = require('./utils/isPrime')
const digitSum = require('./utils/digitSum')
const isArmstrong = require('./utils/isArmstrong')
const isPerfect = require('./utils/isPerfect')

const app = express()

// to compress responses
app.use(compression());

app.get('/api/classify-number', async (req, res) => {
    try {
        const num = req.query.number * 1

        // If the query is not a number
        if (isNaN(num)) {
            return res.status(400).json({
                number: req.query.number,
                error: true
            })
        }

        // Fetch the numbers info from the Numbers API
        const info = await axios.get(`http://numbersapi.com/${num}/math`)

        res.status(200).json({
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties: isArmstrong(num),
            digit_sum: digitSum(num),  // sum of its digits
            fun_fact: info.data //gotten from the numbers API
        })
    } catch (error) {
        res.status(500).json({ error });
    }
})

app.listen(8000, () => {
    console.log('App is listening')
})