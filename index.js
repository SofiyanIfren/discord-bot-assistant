const Discord   = require("discord.js")
const config    = require("./config.json")
const client    = new Discord.Client()
const ytdl      = require('ytdl-core')

const prefix = '!'

client.on('ready', () => console.log('Hello World, I\'m awaken!'))

client.on('message', async message => {
    if (message.author.bot) return // it's not a bot who's speaking
    if (!message.content.startsWith(prefix)) return
    
    const commandBody   = message.content.slice(prefix.length)
    const args          = commandBody.split(' ') // tab === ['command', 'arg1', 'arg2', ...]
    const command       = args.shift().toLowerCase()

    if (command === 'ping'){
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken} ms.`)
    } 
    
    
    else if (command === 'despacito'){
        //message.reply(`Hi there ! What can I do for you ?`) 
        voiceChannel = client.channels.cache.get('776491312814882867') // coworking
        //console.log(voiceChannel)
        const connection = await voiceChannel.join()
        connection.play(await ytdl('https://www.youtube.com/watch?v=kJQP7kiw5Fk', { type: 'opus' }));
    }
})


client.login(config.BOT_TOKEN) // .then(() => console.log(client.channels.cache.array()))
