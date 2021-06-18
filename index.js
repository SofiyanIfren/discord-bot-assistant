// idées de fonctionnalités (!help pour la liste) : recherche !wiki, !gif api, !youtube query (!play/!pause/!resume), 
// !convert (binaire, ASCII, hex, octal, RGB conversions)
// hash/decrypt => MD5, SHA1, SHA256, SHA512 and other hashes / MD5 and SHA1 decrypt search
// ! trad (eng/fr, see libretranslate) 
// currency converter / crypto converter
// joke api (random)
// citations inspirantes
// mini-games
const proverbes = require("./proverbes.json")

const Discord   = require("discord.js")
const config    = require("./config.json")
const client    = new Discord.Client()
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
    } else if (command === 'despacito'){
        voiceChannel = client.channels.cache.get('776491312814882867') // coworking channel id
        const connection = await voiceChannel.join()
        connection.play(await ytdl('https://www.youtube.com/watch?v=kJQP7kiw5Fk', { type: 'opus' }));
    }
})


client.login(config.BOT_TOKEN)
