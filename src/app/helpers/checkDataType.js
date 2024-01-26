

const checkIsObject = ( x ) => {
    return Object.prototype.toString.call(x) === '[object Object]';
}

const checkIsArray = ( x ) => {
    return Object.prototype.toString.call(x) === '[object Array]';
}

const checkIsString = ( x ) => {
    return Object.prototype.toString.call(x) === '[object String]';
}

const checkIsNumber = ( x ) => {
    return Object.prototype.toString.call(x) === '[object Number]';
}

const checkIsInteger = ( x ) => {
    return Number.isInteger(x);
}





// exports ======================================================
module.exports =  { checkIsObject, checkIsArray, checkIsString, checkIsNumber, checkIsInteger };