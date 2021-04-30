import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import serverless from 'serverless-http'
import {Constants} from './config/Constants'
import {api} from './api'


const app = new Koa()
const router = new Router()

router.use('/api', api.routes())

app.use(bodyParser())
app.use(ctx => {
    ctx.body = `Request Body : ${JSON.stringify(ctx.request.body)}`
})
app.use(router.routes()).use(router.allowedMethods())

if(Constants.RUNNING_MODE === 'local') {
    app.listen(4000, () => {
        console.log('listening')
    })
}

export const appHandler = serverless(app)