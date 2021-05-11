// DB와 연결되는 Sequelize 객체 생성

import { Sequelize } from 'sequelize-typescript'
import { User } from './User'

export const sequelize = new Sequelize({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB,
    port: parseInt(process.env.MYSQL_PORT),
    dialect: 'mysql',
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PSWD,
    storage: ':memory',
    logging: false,
    timezone: '+09:00', // DB Timezone과 맞춤
    models: [
        User
    ]
})

// const sequelize = new Sequelize(
//     process.env.MYSQL_DB,
//     process.env.MYSQL_USER,
//     process.env.MYSQL_PSWD,
//     {
//         host: process.env.MYSQL_HOST,
//         dialect: 'mysql',
//         define: {
//             timestamps: false
//         },
//         timezone: '+09:00',
//         pool: {
//             max: 30,
//             min: 1,
//             acquire: 30000,
//             idle: 1000
//         }
//     }
// )

export default sequelize;