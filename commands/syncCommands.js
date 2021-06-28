const Discord           = require("discord.js")
const colors            = require("../colors.json")
const helpUtils         = require("../utils/help.js")
const converterUtils    = require("../utils/utilsConverter.js")
const proverbesData     = require("../data/proverbes.json")

function sendPong (message){
    const timeTaken = Date.now() - message.createdTimestamp 
    return new Discord.MessageEmbed().setColor(colors.SERVER_COLOR)
        .setTitle('Pong !').setDescription(`This message had a latency of ${timeTaken} ms.`)
}

function sendBasicHelp (){
    return new Discord.MessageEmbed().setColor(colors.SERVER_COLOR)
        .setTitle('Aide générale').setDescription('Utilisation : ** !help <argument> **\nVoici une liste des arguments possibles:\n')
        .addFields(helpUtils.sendBasicHelp())
}
function sendSpecificHelp (argument){
    return new Discord.MessageEmbed().setColor(colors.SERVER_COLOR)
        .setTitle('Aide : '+argument).setDescription('Utilisation : ** !<commande> **\nVoici une liste des commandes disponibles:')
        .addFields(helpUtils.sendSpecificHelp(argument))
}

function sendProverbe (){
    const proverbe = proverbesData[Math.floor(Math.random() * proverbesData.length)]
    return new Discord.MessageEmbed().setColor(colors.PERSO_COLOR)
        .setTitle(`${Object.keys(proverbe)[0]}`).setDescription(`${Object.values(proverbe)[0]}`)
}

function sendConvertedNumbers (numberToConvert, conversionFrom, conversionTo){
    return new Discord.MessageEmbed().setColor(colors.MATH_COLOR)
        .setTitle(conversionTo+' : '+converterUtils.convertNumbers(numberToConvert, conversionFrom, conversionTo))
        .setDescription(conversionFrom+' : '+numberToConvert)
}
function sendConvertedUnitsNumbers (numberToConvert, conversionFrom){
    return new Discord.MessageEmbed().setColor(colors.UTILS_COLOR).setTitle()
        .setTitle(converterUtils.convertUnits(numberToConvert, conversionFrom))
        .setDescription(numberToConvert+' '+conversionFrom)
}

module.exports = {
    sendPong,
    sendBasicHelp,
    sendSpecificHelp,
    sendProverbe,
    sendConvertedNumbers,
    sendConvertedUnitsNumbers,
}