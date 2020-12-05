const config = require('dotenv').config();

exports.MONGODB_URI = config.parsed.MONGODB_URI;
exports.JWT_SECRET = config.parsed.JWT_SECRET;
exports.GITHUB_TOKEN = config.parsed.GITHUB_TOKEN;
