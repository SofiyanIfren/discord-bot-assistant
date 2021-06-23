const PERSONNAL_ASSISTANT_CHANNEL_ID = '856796622583234601'
const COWORKING_CHANNEL_ID = '776491312814882867'

const proverbes  = require("./data/proverbes.json")
const converter  = require("./services/converter.js")
const calendar   = require("./services/calendar.js")
const weather    = require("./services/weather.js")
const wiki       = require("./services/wiki.js")
const domains    = require("./services/domains.js")
const anime      = require("./services/anime.js")
const numbers    = require("./services/numbers.js")
const translator = require("./services/translator.js")

const utilsConverter = require("./utils/utilsConverter.js")
const help           = require("./utils/help.js")

const Discord    = require("discord.js")
const config     = require("./config.json")
const client     = new Discord.Client()
const fetch      = require("node-fetch")
const ytdl       = require('ytdl-core')

const prefix = '!'

client.on('ready', () => console.log('Hello World, I\'m awaken!')) //  

client.on('message', async message => {
    if (message.author.bot) return // it's not a bot who's speaking
    if (!message.content.startsWith(prefix)) return
    
    const commandBody   = message.content.slice(prefix.length)
    const args          = commandBody.split(' ') // tab === ['command', 'arg1', 'arg2', ...]
    const command       = args.shift().toLowerCase()

    const assistantTextChannel = client.channels.cache.get(PERSONNAL_ASSISTANT_CHANNEL_ID)

    if (command === 'ping' && args.length === 0){               // ***** !ping *****
        const timeTaken = Date.now() - message.createdTimestamp
        assistantTextChannel.send(`pong! This message had a latency of ${timeTaken} ms.`)
    } else if (command === 'help' && args.length === 0){        // ***** !help *****
        assistantTextChannel.send(help)
    } else if (command === 'proverbe' && args.length === 0){    // ***** !proverbe *****
        const proverbe = proverbes[Math.floor(Math.random() * proverbes.length)]
        assistantTextChannel.send(`${Object.keys(proverbe)[0]} - ${Object.values(proverbe)[0]}`)
    } else if (command === 'date' && args.length === 1) {       // ***** !date <format> *****
        if (args[0] === 'hegire')        calendar.getHijriDate()
            .then(res => assistantTextChannel.send(res))
        if (args[0] === 'gregoire')    calendar.getGregorianDate()
            .then(res => assistantTextChannel.send(res))
    } else if (command === 'meteo' && args.length === 1){       // ***** !meteo <nom_ville> *****
        const city = args[0].toLowerCase()
        weather.getCityWeather(city)
            .then(res => assistantTextChannel.send('Ville de '+city+' : '+res))
    } else if (command === 'wiki' && args.length === 2){        // ***** !wiki search/suggestions <word> *****
        if (args[0] === 'search')
            wiki.getWikiSuggestions(args[1])
                .then(res => assistantTextChannel.send(res[3][0]))
        if (args[0] === 'suggestions')
            wiki.getWikiSuggestions(args[1])
                .then(res => assistantTextChannel.send(res[3]))
    } else if (command === 'domaine' && args.length === 1){     // ***** !domaine <mot> *****
        domains.getSuggestedDomains(args[0]).then((domainsData) => assistantTextChannel.send(domainsData.slice(0,-1)))
    } else if (command === 'chat' && args.length === 0){        // ***** !chat  *****
        fetch('https://thatcopy.pw/catapi/rest/')
            .then(res => res.json().then(cat => assistantTextChannel.send(cat.webpurl)))
    } else if (command === 'anime' && args.length === 0){       // ***** !anime *****
        anime.getRandomAnimeCitation()
            .then(citation => assistantTextChannel.send(citation))
    } else if (command === 'nombre' && args.length === 0){      // ***** !nombre *****
        numbers.getRandomNumberFunFact()
            .then(fact => assistantTextChannel.send(fact))
    } else if (command === 'nombre' && args.length === 1){      // ***** !number <nombre> *****
        numbers.getNumberFunFact(args[0])
            .then(fact => assistantTextChannel.send(fact))
    } else if (command === 'convert'){
        if (args.length === 3){                                 // ***** !convert <nombre> <origine> <destination>  *****
            const [numberToConvert, conversionFrom, conversionTo] = [args[0], args[1], args[2]]
            converter.convert(numberToConvert, conversionFrom, conversionTo)
                .then(res => assistantTextChannel.send(res))
        }
        if (args.length === 2){                                 // ***** !convert <nombre> <origine> *****
            const [numberToConvert, conversionFrom] = [args[0], args[1]]
            assistantTextChannel.send(utilsConverter.convert(numberToConvert, conversionFrom))
        }
    } else if (command === 'trad' && args.length === 3){        // ***** !trad <mot> <origine> <destination> *****
        translator.translate(args[0], args[1], args[2])
            .then((res) => assistantTextChannel.send(res.translatedText))
    } else if (command === 'advice' && args.length === 0){      // ***** !advice *****
        fetch('https://api.adviceslip.com/advice').then(res => res.json()
            .then(advice => assistantTextChannel.send(advice.slip.advice)))
    } else if (command === 'lofi' && args.length === 1){        // ***** !lofi play/stop *****
        voiceChannel = client.channels.cache.get(COWORKING_CHANNEL_ID) 
        const connection = await voiceChannel.join()
        if (args[0] === 'play')
            connection.play(await ytdl('https://www.youtube.com/watch?v=5qap5aO4i9A', { type: 'opus' }))
        if (args[0] === 'stop')
            voiceChannel.leave()
    }
})


client.login(config.BOT_TOKEN)
