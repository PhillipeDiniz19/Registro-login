const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'usuariocadastro',
  password: '123456',
  port: 5454,
});

const getMerchants = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  const createMerchant = (body) => {
    return new Promise(function(resolve, reject) {
      const {password, name, email } = body
      pool.query('INSERT INTO merchants (password, name, email) VALUES ($1, $2, $3) RETURNING *', [password, name, email], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Usuario foi cadastrado parabéns`)
      })
    })
  }


module.exports = {
    getMerchants,
    createMerchant,
}