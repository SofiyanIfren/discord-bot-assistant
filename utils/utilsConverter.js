function convertNumbers (numberToConvert, conversionFrom, conversionTo){

    /* MEASUREMENTS */
    if (conversionFrom === 'lb'){
        if (conversionTo === 'kg')  return numberToConvert/2.2046
        if (conversionTo === 'oz')  return numberToConvert*16
        if (conversionTo === 'g')   return numberToConvert/0.0022046
        if (conversionTo === 'st')  return numberToConvert*0.071429
    }
    
    if (conversionFrom === 'kg'){
        if (conversionTo === 'lb')  return numberToConvert*2.2046
        if (conversionTo === 'oz')  return numberToConvert*35.274
        if (conversionTo === 'g')   return numberToConvert*1000
        if (conversionTo === 'st')  return numberToConvert*0.1574
    }

    if (conversionFrom === 'oz'){
        if (conversionTo === 'lb')  return numberToConvert*0.0625
        if (conversionTo === 'kg')  return numberToConvert/35.274
        if (conversionTo === 'g')   return numberToConvert/0.035274
        if (conversionTo === 'st')  return numberToConvert*0.0044643
    }

    if (conversionFrom === 'g'){
        if (conversionTo === 'lb')  return numberToConvert*0.0022046
        if (conversionTo === 'kg')  return numberToConvert/1000
        if (conversionTo === 'oz')  return numberToConvert*0.035274
        if (conversionTo === 'st')  return numberToConvert*0.00015747
    }

    if (conversionFrom === 'st'){
        if (conversionTo === 'lb')  return numberToConvert*14
        if (conversionTo === 'kg')  return numberToConvert/0.15747
        if (conversionTo === 'oz')  return numberToConvert*224
        if (conversionTo === 'g')   return numberToConvert/0.00015747
    }

    /* TEMPERATURES */
    if (conversionFrom === 'celsius' && conversionTo === 'farenheit')
        return (numberToConvert*1.8)+32
    if (conversionFrom === 'farenheit' && conversionTo === 'celsius')
        return (numberToConvert-32)/1.8

    /* LENGTH */
    if (conversionFrom === 'ft'){
        if (conversionTo === 'm')   return numberToConvert/3.2808
        if (conversionTo === 'in')  return numberToConvert*12
        if (conversionTo === 'cm')  return numberToConvert/0.032808
        if (conversionTo === 'yd')  return numberToConvert*0.33333
        if (conversionTo === 'km')  return numberToConvert/3280.8
        if (conversionTo === 'miles')  return numberToConvert*0.00018939
    }

    if (conversionFrom === 'm'){
        if (conversionTo === 'ft')  return numberToConvert*3.2808
        if (conversionTo === 'in')  return numberToConvert*39.370
        if (conversionTo === 'cm')  return numberToConvert/0.01
        if (conversionTo === 'yd')  return numberToConvert*1.0936
        if (conversionTo === 'km')  return numberToConvert/1000
        if (conversionTo === 'miles')  return numberToConvert*0.00062137
    }

    if (conversionFrom === 'in'){
        if (conversionTo === 'ft')  return numberToConvert*0.083333
        if (conversionTo === 'm')   return numberToConvert/39.370
        if (conversionTo === 'cm')  return numberToConvert/0.39370
        if (conversionTo === 'yd')  return numberToConvert*0.027778
        if (conversionTo === 'km')  return numberToConvert/39370
        if (conversionTo === 'miles')  return numberToConvert*0.000015783
    }

    if (conversionFrom === 'cm'){
        if (conversionTo === 'ft')  return numberToConvert*0.032808
        if (conversionTo === 'm')   return numberToConvert/100
        if (conversionTo === 'in')  return numberToConvert*0.39370
        if (conversionTo === 'yd')  return numberToConvert*0.010936
        if (conversionTo === 'km')  return numberToConvert/100000
        if (conversionTo === 'miles')  return numberToConvert*0.0000062137
    }

    if (conversionFrom === 'yd'){
        if (conversionTo === 'ft')  return numberToConvert*3
        if (conversionTo === 'm')   return numberToConvert/1.0936
        if (conversionTo === 'in')  return numberToConvert*36
        if (conversionTo === 'cm')  return numberToConvert/0.010936
        if (conversionTo === 'km')  return numberToConvert/1093.6
        if (conversionTo === 'miles')  return numberToConvert*0.00056818
    }

    if (conversionFrom === 'km'){
        if (conversionTo === 'ft')  return numberToConvert*3280.8
        if (conversionTo === 'm')   return numberToConvert*1000
        if (conversionTo === 'in')  return numberToConvert*39370
        if (conversionTo === 'cm')  return numberToConvert*100000
        if (conversionTo === 'yd')  return numberToConvert*1093.6
        if (conversionTo === 'miles')  return numberToConvert*0.62137
    }

    if (conversionFrom === 'miles'){
        if (conversionTo === 'ft')  return numberToConvert*5280
        if (conversionTo === 'm')   return numberToConvert/0.00062137
        if (conversionTo === 'in')  return numberToConvert*63360
        if (conversionTo === 'cm')  return numberToConvert/0.0000062137
        if (conversionTo === 'yd')  return numberToConvert*1760
        if (conversionTo === 'km')  return numberToConvert/0.62137
    }

    /* NUMBERS */
    if(conversionTo === 'binary')            return Number(numberToConvert).toString(2)
    else if(conversionTo === 'octal')        return Number(numberToConvert).toString(8)
    else if(conversionTo === 'decimal')      return Number(numberToConvert).toString(10)
    else if(conversionTo === 'hexadecimal')  return Number(numberToConvert).toString(16)
    
    return ""
}

module.exports = {
    convertNumbers
}