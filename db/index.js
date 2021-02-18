const Pool = require("pg").Pool;
const pgtools = require("pgtools");
 const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Famazon",
    password: 'SoukiButt1!',
    port: 5433,
});


module.exports = pool