const POOL = require("pg").Pool;
const pool = new POOL({
	user: process.env.USER,
	password: process.env.PASS,
	database: process.env.DB,
	host: "localhost",
	port: process.env.PGPORT,
});
module.exports = pool;
