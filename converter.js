const fetch = require("node-fetch")

const BINARY      = 2
const OCTAL       = 8
const DECIMAL     = 10
const HEXADECIMAL = 16

async function binaryToOctal (binaryNumber) { 
    let result = ''
    await fetch('https://networkcalc.com/api/binary/' + binaryNumber + '?from='+BINARY+'&to='+OCTAL)
    .then((data) => data.json().then((res) => result = res.converted))
    return result
}
async function binaryToDecimal (binaryNumber) {
    let result = '******************** test ********************'
    await fetch('https://networkcalc.com/api/binary/' + binaryNumber + '?from='+BINARY+'&to='+DECIMAL)
    .then((data) => data.json().then((res) => result = res.converted))
    return result
}
async function binaryToHexadecimal (binaryNumber) {
    let result = ''
    await fetch('https://networkcalc.com/api/binary/' + binaryNumber + '?from='+BINARY+'&to='+HEXADECIMAL)
    .then((data) => data.json().then((res) => result = res.converted))
    return result
}

async function octalToBinary (octalNumber) {
    let result = ''
    await fetch('https://networkcalc.com/api/binary/' + octalNumber + '?from='+OCTAL+'&to='+BINARY)
    .then((data) => data.json().then((res) => result = res.converted))
    return result
}
async function octalToDecimal (octalNumber) {
    let result = ''
    await fetch('https://networkcalc.com/api/binary/' + octalNumber + '?from='+OCTAL+'&to='+DECIMAL)
    .then((data) => data.json().then((res) => result = res.converted))
    return result
}
async function octalToHexadecimal (octalNumber) {
    let result = ''
    await fetch('https://networkcalc.com/api/binary/' + octalNumber + '?from='+OCTAL+'&to='+HEXADECIMAL)
    .then((data) => data.json().then((res) => result = res.converted))
    return result
}

async function decimalToBinary (decimalNumber) {
    let result = ''
    await fetch('https://networkcalc.com/api/binary/' + decimalNumber + '?from='+DECIMAL+'&to='+BINARY)
    .then((data) => data.json().then((res) => result = res.converted))
    return result
}
async function decimalToOctal (decimalNumber) {
    let result = ''
    await fetch('https://networkcalc.com/api/binary/' + decimalNumber + '?from='+DECIMAL+'&to='+OCTAL)
    .then((data) => data.json().then((res) => result = res.converted))
    return result
}
async function decimalToHexadecimal (decimalNumber) {
    let result = ''
    await fetch('https://networkcalc.com/api/binary/' + decimalNumber + '?from='+DECIMAL+'&to='+HEXADECIMAL)
    .then((data) => data.json().then((res) => result = res.converted))
    return result
}

async function hexadecimalToBinary (hexadecimalNumber) {
    let result = ''
    await fetch('https://networkcalc.com/api/binary/' + hexadecimalNumber + '?from='+HEXADECIMAL+'&to='+BINARY)
    .then((data) => data.json().then((res) => result = res.converted))
    return result
}
async function hexadecimalToOctal (hexadecimalNumber) {
    let result = ''
    await fetch('https://networkcalc.com/api/binary/' + hexadecimalNumber + '?from='+HEXADECIMAL+'&to='+OCTAL)
    .then((data) => data.json().then((res) => result = res.converted))
    return result
}
async function decimalToDecimal (hexadecimalNumber) {
    let result = ''
    await fetch('https://networkcalc.com/api/binary/' + hexadecimalNumber + '?from='+HEXADECIMAL+'&to='+DECIMAL)
    .then((data) => data.json().then((res) => result = res.converted))
    return result
}

async function convert (numberToConvert, conversionFrom, conversionTo) {
    let result = ''
    if (conversionFrom.toLowerCase() === 'binary' && conversionTo.toLowerCase() === 'octal')
        await binaryToOctal(numberToConvert).then((resp) => result = resp)
    if (conversionFrom.toLowerCase() === 'binary' && conversionTo.toLowerCase() === 'decimal')
        await binaryToDecimal(numberToConvert).then((resp) => result = resp)
    if (conversionFrom.toLowerCase() === 'binary' && conversionTo.toLowerCase() === 'hexadecimal')
        await binaryToHexadecimal(numberToConvert).then((resp) => result = resp)

    if (conversionFrom.toLowerCase() === 'octal' && conversionTo.toLowerCase() === 'binary')
        await octalToBinary(numberToConvert).then((resp) => result = resp)
    if (conversionFrom.toLowerCase() === 'octal' && conversionTo.toLowerCase() === 'decimal')
        await octalToDecimal(numberToConvert).then((resp) => result = resp)
    if (conversionFrom.toLowerCase() === 'octal' && conversionTo.toLowerCase() === 'hexadecimal')
        await octalToHexadecimal(numberToConvert).then((resp) => result = resp)

    if (conversionFrom.toLowerCase() === 'decimal' && conversionTo.toLowerCase() === 'binary')
        await decimalToBinary(numberToConvert).then((resp) => result = resp)
    if (conversionFrom.toLowerCase() === 'decimal' && conversionTo.toLowerCase() === 'octal')
        await decimalToOctal(numberToConvert).then((resp) => result = resp)
    if (conversionFrom.toLowerCase() === 'decimal' && conversionTo.toLowerCase() === 'hexadecimal')
        await decimalToHexadecimal(numberToConvert).then((resp) => result = resp)

    if (conversionFrom.toLowerCase() === 'hexadecimal' && conversionTo.toLowerCase() === 'binary')
        await hexadecimalToBinary(numberToConvert).then((resp) => result = resp)
    if (conversionFrom.toLowerCase() === 'hexadecimal' && conversionTo.toLowerCase() === 'octal')
        await hexadecimalToOctal(numberToConvert).then((resp) => result = resp)
    if (conversionFrom.toLowerCase() === 'hexadecimal' && conversionTo.toLowerCase() === 'decimal')
        await hexadecimalToDecimal(numberToConvert).then((resp) => result = resp)
    return result
}


module.exports = {binaryToOctal,
    binaryToDecimal,
    binaryToHexadecimal,
    octalToBinary,
    octalToDecimal,
    octalToHexadecimal,
    decimalToBinary,
    decimalToOctal,
    decimalToHexadecimal,
    hexadecimalToBinary,
    hexadecimalToOctal,
    decimalToDecimal,
    convert
}