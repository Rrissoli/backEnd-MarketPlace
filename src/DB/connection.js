
const knex = require('knex')({

    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    },
    ssl: {
        rejectUnathorized: false
    }
});
module.exports = knex