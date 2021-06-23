/***** POIDS *****/
function convertFromGramme (grWeight){ return grWeight*0.035274 +'oz (' + grWeight*0.0022046 +'lb)' }
function convertFromOunceToGramme (ozWeight){ return ozWeight/0.035274  +'gr' }
function convertFromPoundToGramme (lbWeight){ return lbWeight/0.0022046 +'gr' }

function convertFromKilogramme (kgWeight){ return kgWeight*0.15747 +'st' }
function convertFromStoneToKilogramme (stWeight){ return stWeight/0.15747 +'kg' }

/***** TAILLE *****/
function convertFromPouceToCentimetre (inchSize){ return inchSize/0.39370 +'cm' }
function convertFromFootToCentimetre (footSize){ return footSize/0.032808 +'cm' }
function convertFromYardToCentimetre (yardSize){ return yardSize/0.010936 +'cm' }

function convertFromCentimetre (cmSize){ return cmSize*0.39370 +'inch ('+ cmSize*0.032808 +'ft - '+ cmSize*0.010936 +'yd)'}
function convertFromKilometre (kmSize){ return kmSize*0.62137 +'mile(s)' }

function convertFromMileToKilometre (mileSize){ return mileSize/0.62137 +'km'}

/***** TEMPERATURE *****/
function convertFromCelsiusToFarenheit (celciusTemp){ return (celciusTemp*1.8)+32 +' °F' }
function convertFromFarenheitToCelsius (farenheitTemp){ return (farenheitTemp-32)/1.8 +' °C' }

/***** CONVERSION **** */
function convertUnits (numberToConvert, conversionFrom){
    let result = ''

    if (conversionFrom.toLowerCase() === 'gr')          result = convertFromGramme(numberToConvert)
    if (conversionFrom.toLowerCase() === 'oz')          result = convertFromOunceToGramme(numberToConvert)
    if (conversionFrom.toLowerCase() === 'lb')          result = convertFromPoundToGramme(numberToConvert)
    if (conversionFrom.toLowerCase() === 'kg')          result = convertFromKilogramme(numberToConvert)
    if (conversionFrom.toLowerCase() === 'st')          result = convertFromStoneToKilogramme(numberToConvert)
    if (conversionFrom.toLowerCase() === 'inch')        result = convertFromPouceToCentimetre(numberToConvert)
    if (conversionFrom.toLowerCase() === 'ft')          result = convertFromFootToCentimetre(numberToConvert)
    if (conversionFrom.toLowerCase() === 'yd')          result = convertFromYardToCentimetre(numberToConvert)
    if (conversionFrom.toLowerCase() === 'cm')          result = convertFromCentimetre(numberToConvert)
    if (conversionFrom.toLowerCase() === 'km')          result = convertFromKilometre(numberToConvert)
    if (conversionFrom.toLowerCase() === 'mile')        result = convertFromMileToKilometre(numberToConvert)
    if (conversionFrom.toLowerCase() === 'celsius')     result = convertFromCelsiusToFarenheit(numberToConvert)
    if (conversionFrom.toLowerCase() === 'farenheit')   result = convertFromFarenheitToCelsius(numberToConvert)

    return result
}

function convertNumbers (numberToConvert, conversionFrom, conversionTo){
    let conversionFromFormat = ''
    let conversionToFormat   = ''

    if(conversionFrom === 'binary')            conversionFromFormat = 2
    else if(conversionFrom === 'octal')        conversionFromFormat = 8
    else if(conversionFrom === 'decimal')      conversionFromFormat = 10
    else if(conversionFrom === 'hexadecimal')  conversionFromFormat = 16

    if(conversionTo === 'binary')              conversionToFormat = 2
    else if(conversionTo === 'octal')          conversionToFormat = 8
    else if(conversionTo === 'decimal')        conversionToFormat = 10
    else if(conversionTo === 'hexadecimal')    conversionToFormat = 16
    
    return parseInt(numberToConvert,conversionFromFormat).toString(conversionToFormat)
}

module.exports = {
    convertFromGramme,
    convertFromOunceToGramme,
    convertFromPoundToGramme,
    convertFromKilogramme,
    convertFromStoneToKilogramme,
    convertFromPouceToCentimetre,
    convertFromFootToCentimetre,
    convertFromYardToCentimetre,
    convertFromCentimetre,
    convertFromKilometre,
    convertFromMileToKilometre,
    convertFromCelsiusToFarenheit,
    convertFromFarenheitToCelsius,
    convertUnits,
    convertNumbers
}