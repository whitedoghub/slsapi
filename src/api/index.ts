import Router from 'koa-router'
import {books} from './books'

export const api = new Router()

api.use('/books', books.routes())

