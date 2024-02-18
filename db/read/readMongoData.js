import { PrismaClient } from "@prisma/client"
import { checkIsArray, checkIsObject, checkIsString } from "@/utils/typeCheck/typeCheck"
import { ERROR_CODES } from "@/utils/code/errors"
import redis from "../client/redis/client"
import { REDIS } from "@/utils/code/constants"
import { REDIS_KEYS } from "@/utils/code/redisKeys"

const prisma = new PrismaClient()

// HISTORY DOCUMENT ━━━━━━━━━━━━━━━━━━━━━
export const findHistory = async ({ cid }) => {
    const res = checkIsString(cid)? await prisma.history.findMany({ where:{buyer_id:cid} }) : null

    if((Array.isArray(res) && res.length===0) || res===null) return null 

    // update redis
    redis.setex(REDIS_KEYS.HISTORY_KEY(cid),REDIS.HISTORY_EXPIRY,res)
    return res
}