const proverbes = require("./proverbes.json")
const converter = require("./converter.js")

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

    if (command === 'ping'){
        const timeTaken = Date.now() - message.createdTimestamp
        message.reply(`Pong! This message had a latency of ${timeTaken} ms.`)
    } else if (command === 'proverbe'){
        const proverbe = proverbes[Math.floor(Math.random() * proverbes.length)]
        message.reply(`${Object.keys(proverbe)[0]} - ${Object.values(proverbe)[0]}`)
    } else if (command === 'convert' && args.length === 3){ // !convert <number> <from> <to> 
        const numberToConvert = args[0]
        const conversionFrom  = args[1]
        const conversionTo    = args[2]

        if (conversionFrom.toLowerCase() === 'binary' && conversionTo.toLowerCase() === 'octal')
            converter.binaryToOctal(numberToConvert).then((resp) => message.reply(resp))
        if (conversionFrom.toLowerCase() === 'binary' && conversionTo.toLowerCase() === 'decimal')
            converter.binaryToDecimal(numberToConvert).then((resp) => message.reply(resp))
        if (conversionFrom.toLowerCase() === 'binary' && conversionTo.toLowerCase() === 'hexadecimal')
            converter.binaryToHexadecimal(numberToConvert).then((resp) => message.reply(resp))

        if (conversionFrom.toLowerCase() === 'octal' && conversionTo.toLowerCase() === 'binary')
            converter.octalToBinary(numberToConvert).then((resp) => message.reply(resp))
        if (conversionFrom.toLowerCase() === 'octal' && conversionTo.toLowerCase() === 'decimal')
            converter.octalToDecimal(numberToConvert).then((resp) => message.reply(resp))
        if (conversionFrom.toLowerCase() === 'octal' && conversionTo.toLowerCase() === 'hexadecimal')
            converter.octalToHexadecimal(numberToConvert).then((resp) => message.reply(resp))

        if (conversionFrom.toLowerCase() === 'decimal' && conversionTo.toLowerCase() === 'binary')
            converter.decimalToBinary(numberToConvert).then((resp) => message.reply(resp))
        if (conversionFrom.toLowerCase() === 'decimal' && conversionTo.toLowerCase() === 'octal')
            converter.decimalToOctal(numberToConvert).then((resp) => message.reply(resp))
        if (conversionFrom.toLowerCase() === 'decimal' && conversionTo.toLowerCase() === 'hexadecimal')
            converter.decimalToHexadecimal(numberToConvert).then((resp) => message.reply(resp))

        if (conversionFrom.toLowerCase() === 'hexadecimal' && conversionTo.toLowerCase() === 'binary')
            converter.hexadecimalToBinary(numberToConvert).then((resp) => message.reply(resp))
        if (conversionFrom.toLowerCase() === 'hexadecimal' && conversionTo.toLowerCase() === 'octal')
            converter.hexadecimalToOctal(numberToConvert).then((resp) => message.reply(resp))
        if (conversionFrom.toLowerCase() === 'hexadecimal' && conversionTo.toLowerCase() === 'decimal')
            converter.hexadecimalToDecimal(numberToConvert).then((resp) => message.reply(resp))
    } else if (command === 'date' && args.length === 1) { // !date <format>
        fetch('http://api.aladhan.com/v1/gToH')
        .then((data) => data.json().then((res) => {
            const sqlGregorianDate = res.data.gregorian.date
            const littGregorianDate = res.data.gregorian.weekday.en +' '+ res.data.gregorian.day
                +' '+ res.data.gregorian.month.en +' '+ res.data.gregorian.year
            const gregorianDate = sqlGregorianDate +' ('+littGregorianDate+')'

            const sqlHijriDate = res.data.hijri.date
            const littHijriDate = res.data.hijri.weekday.en +' '+ res.data.hijri.day
                +' '+ res.data.hijri.month.en +' '+ res.data.hijri.year
            const hijriDate = sqlHijriDate +' ('+littHijriDate+')'
            
            if (args[0] === 'hijri')        message.reply(hijriDate)
            if (args[0] === 'gregorian')    message.reply(gregorianDate)
        }))
    }
    
    /*else if (command === 'despacito'){
        voiceChannel = client.channels.cache.get('776491312814882867') // coworking channel id
        const connection = await voiceChannel.join()
        connection.play(await ytdl('https://www.youtube.com/watch?v=kJQP7kiw5Fk', { type: 'opus' }));
    }*/
})


client.login(config.BOT_TOKEN)
