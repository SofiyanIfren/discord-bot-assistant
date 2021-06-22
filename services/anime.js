const fetch  = require("node-fetch")

async function getRandomAnimeCitation () {
    let result = ''
    await fetch('https://animechan.vercel.app/api/random')
        .then(data => data.json())
        .then(res => result = '"' + res.quote +'" ('+res.character+', in '+res.anime+')')
    return result
}

module.exports = {getRandomAnimeCitation}