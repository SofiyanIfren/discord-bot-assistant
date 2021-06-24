const helpUtils         = require("../utils/help.js")
const converterUtils    = require("../utils/utilsConverter.js")
const proverbesData     = require("../data/proverbes.json")

function sendPong (message){
    const timeTaken = Date.now() - message.createdTimestamp
    return `pong! This message had a latency of ${timeTaken} ms.`
}

function sendBasicHelp (){
    return helpUtils.sendBasicHelp()
}
function sendSpecificHelp (argument){
    return helpUtils.sendSpecificHelp(argument)
}

function sendProverbe (){
    const proverbe = proverbesData[Math.floor(Math.random() * proverbesData.length)]
    return `${Object.keys(proverbe)[0]} - ${Object.values(proverbe)[0]}`
}

function sendConvertedNumbers (numberToConvert, conversionFrom, conversionTo){
    return converterUtils.convertNumbers(numberToConvert, conversionFrom, conversionTo)
}
function sendConvertedUnitsNumbers (numberToConvert, conversionFrom){
    return converterUtils.convertUnits(numberToConvert, conversionFrom)
}

module.exports = {
    sendPong,
    sendBasicHelp,
    sendSpecificHelp,
    sendProverbe,
    sendConvertedNumbers,
    sendConvertedUnitsNumbers,
}