import Koa from 'koa'
import Router from 'koa-router'
import {api} from './api'

const app = new Koa()
const router = new Router()

// app.use(ctx => {
//     ctx.body = 'Hello Koa'
// })

router.use('/api', api.routes())

app.use(router.routes()).use(router.allowedMethods())

app.listen(4000, () => {
    console.log('listening')
})