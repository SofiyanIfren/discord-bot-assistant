const fetch  = require("node-fetch")

async function getSuggestedDomains (searchedWord) {
    let result = []
    await fetch('https://api.domainsdb.info/v1/domains/search?domain='+searchedWord)
        .then((data) =>  data.json().then((res) => result.push(res.domains.map((domain) => (
            result.push(domain.domain)
        )))))
    return result
}

module.exports = {getSuggestedDomains}