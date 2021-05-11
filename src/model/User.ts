import { Column, Model, Table, DataType, CreatedAt, UpdatedAt, AutoIncrement, PrimaryKey, Comment } from 'sequelize-typescript'

@Table
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Comment('회원정보')
    @Column
    userNo: number

    @Comment('회원이름')
    @Column
    name: string

    @CreatedAt
    inDt: Date

    @UpdatedAt
    upDt: Date
}


// @Table({ tableName: 'User', comment: '회원' })
// export class User extends Model<User> {
//     @PrimaryKey
//     @AutoIncrement
//     @Column({type: DataType.INTEGER.UNSIGNED, comment: '회원번호'})
//     public userNo: number

//     @Column({type: DataType.STRING(100), allowNull: false})
//     public name: string

//     @CreatedAt
//     @Column({type: DataType.DATE, comment: '데이터 등록일'})
//     public inDt: Date

//     @UpdatedAt
//     @Column({type: DataType.DATE, comment: '데이터 수정일'})
//     public upDt: Date
// }

// import sequelize from './index'
// import Sequelize, { Model } from 'sequelize'

// export class User extends Model<User> {
//     userNo?: number;
//     name: string;
// }

// sequelize.define('User',
//     {
//         userNo: {
//             type: Sequelize.INTEGER,
//             allowNull: false,
//             autoIncrement: true,
//             primaryKey: true,
//         },
//         name: {
//             type: Sequelize.STRING,
//             allowNull: false
//         }
//     }
// )