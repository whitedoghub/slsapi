import Koa from 'koa'
import Router from 'koa-router'
import {getBooksInfo, getBooks, getDBURL, postInfo} from './BooksController'

export const books = new Router()

books.get('/', getBooks)

books.get('/info/:version', getBooksInfo)

books.get('/dburl', getDBURL)

books.post('/postInfo', postInfo)