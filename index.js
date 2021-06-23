const PERSONNAL_ASSISTANT_CHANNEL_ID = '856796622583234601'
const COWORKING_CHANNEL_ID           = '776491312814882867'

const syncCommands   = require("./commands/syncCommands.js")
const asyncCommands  = require("./commands/asyncCommands.js")
const config         = require("./config.json")

const fetch    = require("node-fetch")
const ytdl     = require('ytdl-core')
const Discord  = require("discord.js")
const client   = new Discord.Client()

const prefix = '!'

client.on('ready', () => console.log('Hello World, I\'m awaken!')) // INIT  

client.on('message', async message => {  // START 
    if (message.author.bot) return // it's not a bot who's speaking
    if (!message.content.startsWith(prefix)) return
    
    const commandBody   = message.content.slice(prefix.length)
    const args          = commandBody.split(' ') // tab === ['command', 'arg1', 'arg2', ...]
    const command       = args.shift().toLowerCase()

    const assistantTextChannel  = client.channels.cache.get(PERSONNAL_ASSISTANT_CHANNEL_ID)
    const coworkingVoiceChannel = client.channels.cache.get(COWORKING_CHANNEL_ID)

    if (command        === 'ping' && args.length === 0){               
        assistantTextChannel.send(syncCommands.sendPong(message))
    } else if (command === 'help' && args.length === 0){        
        assistantTextChannel.send(syncCommands.sendHelp())
    } else if (command === 'proverbe' && args.length === 0){    
        assistantTextChannel.send(syncCommands.sendProverbe())
    } else if (command === 'convert' && args.length === 3){
        const [numberToConvert, conversionFrom, conversionTo] = [args[0], args[1], args[2]]
        assistantTextChannel.send(syncCommands.sendConvertedNumbers(numberToConvert, conversionFrom, conversionTo))
    } else if (command === 'convert' && args.length === 2){
        const [numberToConvert, conversionFrom] = [args[0], args[1]]
        assistantTextChannel.send(syncCommands.sendConvertedUnitsNumbers(numberToConvert, conversionFrom))
    } else if (command === 'date' && args.length === 1) {       
        asyncCommands.sendDate(args[0]).then(date => assistantTextChannel.send(date))
    } else if (command === 'meteo' && args.length === 1){       
        asyncCommands.sendWeather(args[0]).then(weather => assistantTextChannel.send(weather))
    } else if (command === 'wiki' && args.length === 2){        
        asyncCommands.sendWikiResponse(args[0], args[1]).then(response => assistantTextChannel.send(response))
    } else if (command === 'domaine' && args.length === 1){     
        asyncCommands.sendDomainsData(args[0])
            .then((domainsData) => assistantTextChannel.send(domainsData))
    } else if (command === 'chat' && args.length === 0){        
        asyncCommands.sendCat().then(cat => assistantTextChannel.send(cat))
    } else if (command === 'anime' && args.length === 0){       
        asyncCommands.sendAnimeCitation().then(citation => assistantTextChannel.send(citation))
    } else if (command === 'nombre' && args.length === 0){      
        asyncCommands.sendRandomNumberFunFact().then(fact => assistantTextChannel.send(fact))
    } else if (command === 'nombre' && args.length === 1){      
        asyncCommands.sendNumberFunFact(args[0]).then(fact => assistantTextChannel.send(fact))
    } else if (command === 'trad' && args.length === 3){        
        asyncCommands.sendTranslatedWord(args[0], args[1], args[2])
            .then((translatedWord) => assistantTextChannel.send(translatedWord))
    } else if (command === 'advice' && args.length === 0){      
        asyncCommands.sendAdvice().then(advice => assistantTextChannel.send(advice))
    } else if (command === 'change' && args.length === 2){      
        asyncCommands.sendCurrencyChange(args[0], args[1])
            .then(changeInfos => assistantTextChannel.send(changeInfos))
    } else if (command === 'lofi' && args.length === 1){ 
        const connection = await coworkingVoiceChannel.join()
        if (args[0] === 'play')
            connection.play(await ytdl('https://www.youtube.com/watch?v=5qap5aO4i9A', { type: 'opus' }))
        if (args[0] === 'stop')
            coworkingVoiceChannel.leave()
    }
})


client.login(config.BOT_TOKEN) // LAUNCH BOT
