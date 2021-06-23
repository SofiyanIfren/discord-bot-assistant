const fetch             = require("node-fetch")

const calendarService   = require("../services/calendar")
const weatherService    = require("../services/weather.js")
const wikiService       = require("../services/wiki.js")
const domainService     = require("../services/domains.js")
const animeService      = require("../services/anime.js")
const numberService     = require("../services/numbers.js")
const translatorService = require("../services/translator.js")

async function sendDate (calendarParam){
    let date = ''
    if (calendarParam === 'hegire')      
        await calendarService.getHijriDate().then(res => date = res)
    if (calendarParam === 'gregoire')    
        await calendarService.getGregorianDate().then(res => date = res)
    return date
}

async function sendWeather (city){
    let weatherInfo = ''
    await weatherService.getCityWeather(city.toLowerCase())
        .then(res => weatherInfo = 'Ville de '+city+' : '+res)
    return weatherInfo
}

async function sendWikiResponse (typeArg, word){
    let response = ''
    if (typeArg === 'search')
        await wikiService.getWikiSuggestions(word).then(res => response = res[3][0])
    if (typeArg === 'suggestions')
        await wikiService.getWikiSuggestions(word).then(res => response = res[3])
    return response
}

async function sendDomainsData (word){
    let domains = []
    await domainService.getSuggestedDomains(word)
        .then((domainsData) => domains = domainsData.slice(0,-1))
    return domains
}

async function sendAnimeCitation (){
    let citationAnime = ''
    await animeService.getRandomAnimeCitation().then(citation => citationAnime = citation)
    return citationAnime
}

async function sendCat (){
    let catUrl = ''
    await fetch('https://thatcopy.pw/catapi/rest/')
        .then(res => res.json().then(cat => catUrl = cat.webpurl))
    return catUrl
}

async function sendRandomNumberFunFact (){
    let funFact = ''
    await numberService.getRandomNumberFunFact().then(fact => funFact = fact)
    return funFact
}
async function sendNumberFunFact (number){
    let funFact = ''
    await numberService.getNumberFunFact(number).then(fact => funFact = fact)
    return funFact
}

async function sendTranslatedWord (word, originalLanguage, finalLanguage){
    let translatedWord = ''
    await translatorService.translate(word, originalLanguage, finalLanguage).then(res => translatedWord = res.translatedText)
    return translatedWord
}

async function sendAdvice (){
    let advice = ''
    await fetch('https://api.adviceslip.com/advice').then(res => res.json()
        .then(res => advice = res.slip.advice))
    return advice
}

async function sendCurrencyChange (currencyFrom, currencyTo){
    let changeToSend = ''
    await fetch('https://www.frankfurter.app//latest?from='+currencyFrom+'&to='+currencyTo)
        .then(res => res.json().then(curr => {
            let response = '1 '+currencyFrom.toUpperCase()+' = '
            for (var key in curr.rates) {
                response += curr.rates[key]+' '+key
            }
            changeToSend = response
        })
    )
    return changeToSend
}

module.exports = {
    sendDate,
    sendWeather,
    sendWikiResponse,
    sendDomainsData,
    sendCat,
    sendAnimeCitation,
    sendRandomNumberFunFact,
    sendNumberFunFact,
    sendTranslatedWord,
    sendAdvice,
    sendCurrencyChange
}