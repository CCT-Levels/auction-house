const mariadb = require('mariadb')
const pool = mariadb.createPool({
    bigIntAsNumber: true,
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10
});

module.exports = Object.freeze({
    pool: pool
})