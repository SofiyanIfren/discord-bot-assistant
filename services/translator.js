const fetch  = require("node-fetch")

async function translate (word, translateFrom, translateTo){
    let result = ''
    await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({ q: word, source: translateFrom, target: translateTo }),
        headers: { "Content-Type": "application/json" }
    }).then(data => data.json().then(res => result = res))
    return result
} 

module.exports = {
    translate
}