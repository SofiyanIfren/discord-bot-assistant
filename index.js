const syncCommands     = require("./commands/syncCommands.js")
const asyncCommands    = require("./commands/asyncCommands.js")
const discordCommands  = require("./commands/discordCommands.js")
const config           = require("./config.json")

const ytdl     = require('ytdl-core')
const Discord  = require("discord.js")
const client   = new Discord.Client()

const prefix                = '!'
var   assistantTextChannel  = ''
var   coworkingVoiceChannel = ''

client.on('ready', () => console.log('*** Hello World, I\'m awake ! ***')) // INIT

client.on('message', async message => {  // START 
    if (message.author.bot) return       // it's not a bot who's speaking
    if (!message.content.startsWith(prefix)) return
    
    const commandBody   = message.content.slice(prefix.length)
    const args          = commandBody.split(' ')  // tab === ['command', 'arg1', 'arg2', ...]
    const command       = args.shift().toLowerCase()
    
    message.guild.channels.cache.map(x => {
        if (x.name.includes(config.TEXT_CHANNEL))
            assistantTextChannel  = message.guild.channels.cache.get(x.id.toString())
    })
    message.guild.channels.cache.map(x => {
        if (x.name.includes(config.VOCAL_CHANNEL))
            coworkingVoiceChannel = message.guild.channels.cache.get(x.id.toString())
    })

    if (message.channel.id === assistantTextChannel.id){
        if (command === 'invite' && args.length === 1){
            if   (args[0] === 'server')   discordCommands.sendServerInvitation(message).then(invitation => assistantTextChannel.send(invitation))
            else if (args[0] === 'bot')   assistantTextChannel.send(discordCommands.sendBotInvitation())
        } else if (command === 'ping' && args.length === 0){               
            assistantTextChannel.send(syncCommands.sendPong(message))
        } else if (command === 'help' && args.length === 0){        
            assistantTextChannel.send(syncCommands.sendBasicHelp())
        } else if (command === 'help' && args.length === 1){        
            assistantTextChannel.send(syncCommands.sendSpecificHelp(args[0]))
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
        } else if (command === 'wiki' && args.length === 2){        
            asyncCommands.sendWikiResponse(args[0], args[1]).then(response => assistantTextChannel.send(response))
        } else if (command === 'domaine' && args.length === 1){     
            asyncCommands.sendDomainsData(args[0])
                .then((domainsData) => assistantTextChannel.send(domainsData))
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
        } else if (command === 'embed') {
            message.reply(embeds.getEmbed())
        } else if (command === 'question' && args.length > 0) {
            const allArgs = args.join(' ')
            assistantTextChannel.send(syncCommands.sendPoll(allArgs))
        } else {
            message.reply(config.BOT_MESSAGE_INVALID_COMMAND)
        }
    } else {
        message.reply(config.BOT_MESSAGE_USE_THE_RIGHT_CHANNEL)
    }
})

client.login(config.BOT_TOKEN) // LAUNCH BOT
