import Koa from 'koa'
import request from 'request'

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
    ctx.body = `DB URL = ${process.env.DB_URL}`
}

export const postInfo = (ctx: Koa.Context) => {
    const info = ctx.request.body
    ctx.body = info
}

export const testAPIPoomGo = (ctx: Koa.Context) => {
    const option = {
        uri: 'https://open-api.poomgo.com/develop/master/list-partner-resources',
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Authorization': `${process.env.POOMGO_API_KEY}`
        }
    }

    request(option, function(err, response, body) {
        console.error('error: ', err)
        console.log('statusCode: ', response.statusCode)
        console.log('body: ', body)

        ctx.body = body
    })
}