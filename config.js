const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  user_name: process.env.USER_NAME,
  password: process.env.PASSWORD,
  connection: process.env.CONNECTION
};
