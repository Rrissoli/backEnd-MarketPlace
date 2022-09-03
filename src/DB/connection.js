
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-44-205-64-253.compute-1.amazonaws.com',
        user: 'ipvskfulzrjukh',
        password: '314ea5dc6ba44a3125d2ceb34c29dc18b93659feb6b4dfb128cba828e835266a',
        database: 'detkc1hier5k83',
        ssl: {
            rejectUnauthorized: false
        }
    });

module.exports = knex