import {Contants} from '../../config/Contants'

export const getBooksInfo = ctx => {
    ctx.status = 200
    ctx.body = 'books info 109'
}

export const getBooks = ctx => {
    const {version} = ctx.params

    ctx.status = 200
    ctx.body = `books api version : ${version}`
}

export const getDBURL = ctx => {
    ctx.status = 200
    ctx.body = `DB URL = ${Contants.DB_CONFIG.DB_URL}`
}