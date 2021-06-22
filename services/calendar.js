const fetch  = require("node-fetch")

async function getGregorianDate () {
    let gregorianDate = ''
    await fetch('http://api.aladhan.com/v1/gToH').then((data) => data.json().then((res) => {
        const sqlGregorianDate = res.data.gregorian.date
        const littGregorianDate = res.data.gregorian.weekday.en +' '+ res.data.gregorian.day
            +' '+ res.data.gregorian.month.en +' '+ res.data.gregorian.year
        gregorianDate = sqlGregorianDate +' ('+littGregorianDate+')'
    }))
    return gregorianDate
}

async function getHijriDate () {
    let hijriDate = ''
    await fetch('http://api.aladhan.com/v1/gToH').then((data) => data.json().then((res) => {
        const sqlHijriDate = res.data.hijri.date
        const littHijriDate = res.data.hijri.weekday.en +' '+ res.data.hijri.day
            +' '+ res.data.hijri.month.en +' '+ res.data.hijri.year
        hijriDate = sqlHijriDate +' ('+littHijriDate+')'
    }))
    return hijriDate
}

module.exports = {getGregorianDate, getHijriDate}