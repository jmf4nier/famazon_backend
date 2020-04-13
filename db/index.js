const Pool = require("pg").Pool;
 const pool = new Pool({
    user: "jason",
    host: "localhost",
    database: "famazon",
    password: '12345',
    port: 5432,
});

module.exports = pool