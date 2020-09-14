const Pool = require('pg').Pool;


pool = new Pool(
  {
  user:"postgres",
  password:"asdf12@",
  host:"localhost",
  port:5432,
  database:"pern_todo"
  }
);

module.exports =pool;
