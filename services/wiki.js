const fetch  = require("node-fetch")

async function getWikiSuggestions (searchedWord) {
    let result = ''
    await fetch('https://fr.wikipedia.org/w/api.php?action=opensearch&search='+searchedWord)
        .then((data) => data.json().then((res) => result = res))
    return result
}

module.exports = {getWikiSuggestions}