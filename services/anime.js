const fetch  = require("node-fetch")

async function getRandomAnimeCitation () {
    let result = ''
    await fetch('https://animechan.vercel.app/api/random')
        .then(data => data.json())
        .then(res => {
            result = {
                quote : res.quote,
                character : res.character,
                anime : res.anime
            }
        })
    return result
}

module.exports = {getRandomAnimeCitation}