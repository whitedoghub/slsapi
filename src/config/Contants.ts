import dotenv from 'dotenv'

switch(process.env.NODE_ENV) {
    case 'dev': 
        dotenv.config({path: './.env.dev'})
        break
    case 'staging':
        dotenv.config({path: './.env.staging'})
    default:
        dotenv.config()
} 

dotenv.config()

const DB_CONFIG = {
    DB_URL: process.env['DB_URL']
}

export const Contants = {
    DB_CONFIG
}