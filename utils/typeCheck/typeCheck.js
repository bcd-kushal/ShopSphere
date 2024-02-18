

export const checkIsObject  = x => { return Object.prototype.toString.call(x) === '[object Object]' }
export const checkIsArray   = x => { return Object.prototype.toString.call(x) === '[object Array]' }
export const checkIsString  = x => { return Object.prototype.toString.call(x) === '[object String]' }
export const checkIsNumber  = x => { return Object.prototype.toString.call(x) === '[object Number]' }
export const checkIsInteger = x => { return Number.isInteger(x) }
