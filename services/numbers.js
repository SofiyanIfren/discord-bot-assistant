const fetch  = require("node-fetch")

async function getRandomNumberFunFact () {
    let result = ''
    await fetch('http://numbersapi.com/random')
        .then(res => result = res.text())
    return result
}

async function getNumberFunFact (number) {
    let result = ''
    await fetch('http://numbersapi.com/'+number)
        .then(res => result = res.text())
    return result
}

module.exports = {getRandomNumberFunFact, getNumberFunFact}