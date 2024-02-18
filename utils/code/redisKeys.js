import { checkIsString } from "../typeCheck/typeCheck"

export const REDIS_KEYS = {
    HISTORY_KEY: ( str ) => { return (checkIsString(str) && str.length>0)? `HISTORY_${str}` : `HISTORY_UNDEFINED` },
    
}