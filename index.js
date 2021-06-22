const PERSONNAL_ASSISTANT_CHANNEL_ID = '856796622583234601'
const COWORKING_CHANNEL_ID = '856796622583234601'

const proverbes = require("./data/proverbes.json")
const converter = require("./services/converter.js")
const calendar  = require("./services/calendar.js")
const weather   = require("./services/weather.js")
const wiki      = require("./services/wiki.js")
const domains   = require("./services/domains.js")

const Discord   = require("discord.js")
const config    = require("./config.json")
const client    = new Discord.Client()
const fetch     = require("node-fetch")
const ytdl      = require('ytdl-core')

const prefix = '!'

client.on('ready', () => console.log('Hello World, I\'m awaken!')) //  

client.on('message', async message => {
    if (message.author.bot) return // it's not a bot who's speaking
    if (!message.content.startsWith(prefix)) return
    
    const commandBody   = message.content.slice(prefix.length)
    const args          = commandBody.split(' ') // tab === ['command', 'arg1', 'arg2', ...]
    const command       = args.shift().toLowerCase()

    const assistantTextChannel = client.channels.cache.get(PERSONNAL_ASSISTANT_CHANNEL_ID)

    if (command === 'ping'){                                    // !ping
        const timeTaken = Date.now() - message.createdTimestamp
        assistantTextChannel.send(`Pong! This message had a latency of ${timeTaken} ms.`)
    } else if (command === 'proverbe'){                         // !proverbe
        const proverbe = proverbes[Math.floor(Math.random() * proverbes.length)]
        assistantTextChannel.send(`${Object.keys(proverbe)[0]} - ${Object.values(proverbe)[0]}`)
    } else if (command === 'convert' && args.length === 3){     // !convert <number> <from> <to> 
        const numberToConvert = args[0]
        const conversionFrom  = args[1]
        const conversionTo    = args[2]
        converter.convert(numberToConvert, conversionFrom, conversionTo).then((res) => assistantTextChannel.send(res))
    } else if (command === 'date' && args.length === 1) {       // !date <format>
        if (args[0] === 'hijri')        calendar.getHijriDate().then((res) => assistantTextChannel.send(res))
        if (args[0] === 'gregorian')    calendar.getGregorianDate().then((res) => assistantTextChannel.send(res))
    } else if (command === 'weather' && args.length === 1){     // !weather <city_name>
        const city = args[0].toLowerCase()
        weather.getCityWeather(city)
        .then((res) => assistantTextChannel.send('City of '+city+' : '+res))
    } else if (command === 'wiki' && args.length === 2){        // !wiki search/suggestions <word>
        if (args[0] === 'search')
            wiki.getWikiSuggestions(args[1]).then((res) => assistantTextChannel.send(res[3][0]))
        if (args[0] === 'suggestions')
            wiki.getWikiSuggestions(args[1]).then((res) => assistantTextChannel.send(res[3]))
    } else if (command === 'domains' && args.length === 1){     // !domains <word>
        domains.getSuggestedDomains(args[0]).then((domainsData) => assistantTextChannel.send(domainsData.slice(0,-1)))
    }
    
    /*else if (command === 'despacito'){
        voiceChannel = client.channels.cache.get('COWORKING_CHANNEL_ID') 
        const connection = await voiceChannel.join()
        connection.play(await ytdl('https://www.youtube.com/watch?v=kJQP7kiw5Fk', { type: 'opus' }));
    }*/
})


client.login(config.BOT_TOKEN)
