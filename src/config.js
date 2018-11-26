require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 3000,
    MONGO_URL: process.env.MONGO_URL || "user:pass@localhost/db_local"
}
