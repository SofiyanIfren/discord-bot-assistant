const config = require ('../config.json')
const Twit   = require ('twit')
const T      = new Twit({
    consumer_key:           config.TWITTER_API_KEY, 
    consumer_secret:        config.TWITTER_API_KEY_SECRET,
    access_token:           config.TWITTER_ACCESS_TOKEN,
    access_token_secret:    config.TWITTER_ACCESS_TOKEN_SECRET
})

function postTextTweet(textTweet){
    T.post('statuses/update', { status: textTweet })
}

module.exports = {
    postTextTweet
}

