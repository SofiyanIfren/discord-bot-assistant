const Discord           = require("discord.js")
const colors            = require("../colors.json")
const helpUtils         = require("../utils/help.js")
const converterUtils    = require("../utils/utilsConverter.js")
const proverbesData     = require("../data/proverbes.json")

function sendPong (message){
    const timeTaken = Date.now() - message.createdTimestamp 
    return new Discord.MessageEmbed().setColor(colors.SERVER_COLOR)
        .setTitle('❗  Pong  ❗').setDescription(`This message had a latency of ${timeTaken} ms`)
}

function sendBasicHelp (){
    return new Discord.MessageEmbed().setColor(colors.SERVER_COLOR)
        .setTitle('📣  Aide générale').setDescription('Utilisation : ** !help <argument> **\nVoici une liste des arguments possibles:\n')
        .addFields(helpUtils.sendBasicHelp())
}
function sendSpecificHelp (argument){
    return new Discord.MessageEmbed().setColor(colors.SERVER_COLOR)
        .setTitle('📣  Aide : '+argument).setDescription('Utilisation : ** !<commande> **\nVoici une liste des commandes disponibles:')
        .addFields(helpUtils.sendSpecificHelp(argument))
}

function sendProverbe (){
    const proverbe = proverbesData[Math.floor(Math.random() * proverbesData.length)]
    return new Discord.MessageEmbed().setColor(colors.PERSO_COLOR)
        .setTitle(`📖  ${Object.keys(proverbe)[0]}`).setDescription(`${Object.values(proverbe)[0]}`)
}

function sendConvertedNumbers (numberToConvert, conversionFrom, conversionTo){
    return new Discord.MessageEmbed().setColor(colors.MATH_COLOR)
        .setTitle('📈  '+conversionTo+' : '+converterUtils.convertNumbers(numberToConvert, conversionFrom, conversionTo))
        .setDescription(conversionFrom+' : '+numberToConvert)
}

function sendPoll (allArgs){
    let message = new Discord.MessageEmbed().setColor(colors.SERVER_COLOR)
    if (allArgs.includes('+')) {
        let propositions = []
        const alphabet = ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬', '🇭', '🇮', '🇯', '🇰', '🇱',
			'🇲', '🇳', '🇴', '🇵', '🇶', '🇷', '🇸', '🇹', '🇺', '🇻', '🇼', '🇽', '🇾', '🇿']
        const question  = allArgs.split('+')[0]
        const responses = allArgs.split('+')
        if (responses.length > alphabet.length-1)
            return message.setTitle('❌   Oulah ! Trop de propositions !   ❌\n')
                .setDescription('Il n\'existe pas assez de lettres dans l\'alphabet !')
        for (let i=1; i<responses.length; i++){
            propositions.push(alphabet[i-1] + ' : ' + responses[i])
        }
        return message.setTitle('📊 @everyone Petit sondage : ' + question)
            .setDescription(propositions)
    } else {
        return message.setTitle('📊 @everyone Dites : ' + allArgs)
    }
    
}

module.exports = {
    sendPong,
    sendBasicHelp,
    sendSpecificHelp,
    sendProverbe,
    sendConvertedNumbers,
    sendPoll
}