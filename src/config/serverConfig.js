const dotenv = require ("dotenv")
dotenv.config();


module.exports = {
 PORT:process.env.PORT,
 DB_URL:process.env.db_url
}