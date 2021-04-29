import Koa from 'koa'
import {Contants} from '../../config/Contants'

export const getBooksInfo = (ctx: Koa.Context) => {
    ctx.status = 200
    ctx.body = 'books info 109'
}

export const getBooks = (ctx: Koa.Context) => {
    const {version} = ctx.params

    ctx.status = 200
    ctx.body = `books api version : ${version}`
}

export const getDBURL = (ctx: Koa.Context) => {
    ctx.status = 200
    ctx.body = `DB URL = ${Contants.DB_CONFIG.DB_URL}`
}

export const postInfo = (ctx: Koa.Context) => {
    const info = ctx.request.body
    ctx.body = info
}