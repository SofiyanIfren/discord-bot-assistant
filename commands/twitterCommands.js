const Discord        = require("discord.js")
const colors         = require("../colors.json")
const twitterService = require('../services/twitter.js')
const syncCommands   = require("../commands/syncCommands")
const asyncCommands  = require("../commands/asyncCommands.js")

function sendTextTweet(argument, userSignature){
    if(argument === 'proverbe')
        twitterService.postTextTweet(syncCommands.sendProverbe()+' ('+userSignature+' on @discord)')
    if(argument === 'advice')
        asyncCommands.sendAdvice()
            .then(advice => twitterService.postTextTweet(advice+' ('+userSignature+' on @discord)'))
}

function sendTweetConfirmation(user){
    return new Discord.MessageEmbed().setColor(colors.TWEET_COLOR)
        .setDescription('🚀  ** Tweet envoyé par '+user+' **')
}

module.exports = {
    sendTextTweet,
    sendTweetConfirmation
}
