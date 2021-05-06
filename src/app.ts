import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'

import dotenv from 'dotenv'

import serverless from 'serverless-http'
import {api} from './api'


const app = new Koa()
const router = new Router()

switch(process.env.NODE_ENV) {
    case 'local': 
        dotenv.config({path: './.env.dev'})
        break
    case 'dev': 
        dotenv.config({path: './.env.dev'})
        break
    case 'staging':
        dotenv.config({path: './.env.staging'})
        break
    case 'prod':
        dotenv.config({path: './.env.prod'})
        break
    default:
        dotenv.config()
} 


app.use(cors())
router.use('/api', api.routes())

// router.get('/app/hello', (ctx: Koa.Context) => {
//     ctx.body = `DB_URL : ${process.env.DB_URL}`
//     // ctx.body = 'hello world....'
// })

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods())

if(process.env.NODE_ENV === 'local') {
    app.listen(4000, () => {
        console.log('listening')
    })
}

export const appHandler = serverless(app)