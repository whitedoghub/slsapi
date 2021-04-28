export const getBooksInfo = ctx => {
    ctx.status = 200
    ctx.body = 'books info 109'
}

export const getBooks = ctx => {
    const {version} = ctx.params

    ctx.status = 200
    ctx.body = `books api version : ${version}`
}