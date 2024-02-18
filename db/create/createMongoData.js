import { PrismaClient } from "@prisma/client"
import { checkIsArray, checkIsObject } from "@/utils/typeCheck/typeCheck"
import { ERROR_CODES } from "@/utils/code/errors"

const prisma = new PrismaClient()

// HISTORY DOCUMENT ━━━━━━━━━━━━━━━━━━━━━
export const createHistory = async (data) => {
    // check array ------------------------------------------
    if(checkIsArray(data) && data.length>0){
        const result = await prisma.history.createMany({ data:data })
        return result || null
    }
    // check object -----------------------------------------
    else if(checkIsObject(data) && Object.keys(data).length>0){
        const result = await prisma.history.create({ data:data })
        return result || null
    }
    return ERROR_CODES.SYNTAX_ERROR
}


// CART DOCUMENT ━━━━━━━━━━━━━━━━━━━━━  IN PRODUCTYION
export const createCart = async (data) => {
    // create cart_quantites first then reference that------>

    // check array ------------------------------------------
    if(checkIsArray(data) && data.length>0){
        const result = await prisma.cart.createMany({ data:data })
        return result || null
    }
    // check object -----------------------------------------
    else if(checkIsObject(data) && Object.keys(data).length>0){
        const result = await prisma.cart.create({ data:data })
        return result || null
    }
    return ERROR_CODES.SYNTAX_ERROR
}


// CART_QUANTITIES DOCUMENT ━━━━━━━━━━━━━━━━━━━━━
export const createCartQuantity = () => {

}


// ORDERS DOCUMENT ━━━━━━━━━━━━━━━━━━━━━
export const createOrder = async () => {
    if(checkIsArray(data) && data.length>0){
        const result = await prisma.orders.createMany({ data:data })
        return result || null
    }
    else if(checkIsObject(data) && Object.keys(data).length>0){
        const result = await prisma.orders.create({ data:data })
        return result || null
    }
    return ERROR_CODES.SYNTAX_ERROR
}


// PRODUCTS DOCUMENT ━━━━━━━━━━━━━━━━━━━━━
export const createProduct = async () => {
    if(checkIsArray(data) && data.length>0){
        const result = await prisma.product.createMany({ data:data })
        return result || null
    }
    else if(checkIsObject(data) && Object.keys(data).length>0){
        const result = await prisma.product.create({ data:data })
        return result || null
    }
    return ERROR_CODES.SYNTAX_ERROR
}


