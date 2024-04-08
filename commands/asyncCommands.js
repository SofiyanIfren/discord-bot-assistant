const Discord           = require("discord.js")
const colors            = require("../colors.json")
const fetch             = require("node-fetch")
const calendarService   = require("../services/calendar")
const wikiService       = require("../services/wiki.js")
const domainService     = require("../services/domains.js")
const numberService     = require("../services/numbers.js")
const translatorService = require("../services/translator.js")

async function sendDate (calendarParam){
    let date = ''
    if (calendarParam === 'hegire')      
        await calendarService.getHijriDate().then(res => date = res)
    if (calendarParam === 'gregoire')    
        await calendarService.getGregorianDate().then(res => date = res)
    return new Discord.MessageEmbed().setColor(colors.UTILS_COLOR)
        .setTitle('⏰  Date du jour').setDescription(date)
}

async function sendWikiResponse (typeArg, word){
    let response = ''
    if (typeArg === 'search')
        await wikiService.getWikiSuggestions(word).then(res => response = res[3][0])
    if (typeArg === 'suggestions')
        await wikiService.getWikiSuggestions(word).then(res => response = res[3])
    return new Discord.MessageEmbed().setColor(colors.TEXT_COLOR)
        .setTitle('🔎  Wikipédia').setDescription(response)
}

async function sendDomainsData (word){
    let domains = []
    await domainService.getSuggestedDomains(word)
        .then((domainsData) => domains = domainsData.slice(0,-1))
    return new Discord.MessageEmbed().setColor(colors.INFO_COLOR)
        .setTitle('🌍  Domaines Internet').setDescription(domains)
}

async function sendRandomNumberFunFact (){
    let funFact = ''
    await numberService.getRandomNumberFunFact().then(fact => funFact = fact)
    return new Discord.MessageEmbed().setColor(colors.MATH_COLOR)
        .setTitle('⚠  Number Info').setDescription(funFact)
}
async function sendNumberFunFact (number){
    let funFact = ''
    await numberService.getNumberFunFact(number).then(fact => funFact = fact)
    return new Discord.MessageEmbed().setColor(colors.MATH_COLOR)
        .setTitle('⚠  Number Info').setDescription(funFact)
}

async function sendTranslatedWord (word, originalLanguage, finalLanguage){
    let translatedWord = ''
    await translatorService.translate(word, originalLanguage, finalLanguage).then(res => translatedWord = res.translatedText)
    return new Discord.MessageEmbed().setColor(colors.TEXT_COLOR)
        .setTitle('📜  Traduction '+originalLanguage+' / '+finalLanguage).addField(translatedWord, word)
}

async function sendAdvice (){
    let advice = ''
    await fetch('https://api.adviceslip.com/advice').then(res => res.json()
        .then(res => advice = res.slip.advice))
    return new Discord.MessageEmbed().setColor(colors.PERSO_COLOR)
        .setTitle('💊  Life advice').setDescription(advice)
}

async function sendCurrencyChange (currencyFrom, currencyTo){
    let changeToSend = ''
    await fetch('https://www.frankfurter.app/latest?from='+currencyFrom+'&to='+currencyTo)
        .then(res => res.json().then(curr => {
            let response = '1 '+currencyFrom.toUpperCase()+' = '
            for (var key in curr.rates) {
                response += curr.rates[key]+' '+key
            }
            changeToSend = response
        })
    )
    return new Discord.MessageEmbed().setColor(colors.MONEY_COLOR)
        .setTitle('💵  Conversion monnaie').setDescription(changeToSend)
}

module.exports = {
    sendDate,
    sendWikiResponse,
    sendDomainsData,
    sendRandomNumberFunFact,
    sendNumberFunFact,
    sendTranslatedWord,
    sendAdvice,
    sendCurrencyChange
}
