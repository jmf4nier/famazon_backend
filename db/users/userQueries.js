const pool = require('../index')

const getUsers = (request, response) => {
  pool.query(
    'SELECT user_id, first_name, last_name, email FROM users ORDER BY user_id ASC limit 20',
    (error, results) => {
      if (error) {
        return response.status(400).send(error)
      }

      response.status(200).json(results.rows)
    }
  )
}

const getUserById = (request, response) => {
  //request params in url ie: 'https://www.user/${user_id}.com' where user_id = 1
  const user_id = parseInt(request.params.user_id)

  pool.query(
    'SELECT user_id, first_name, last_name, email FROM users WHERE user_id = $1',
    [user_id],
    (error, results) => {
      //results.rows is array of found objects
      //checks for empty array
      if (results.rows.length === 0) {
        return response
          .status(200)
          .json({ response: `no user found with user_id: ${user_id}` })
      }
      if (error) {
        return response.status(400).send(error)
      }
      response.status(200).json(results.rows)
    }
  )
}
const createUser = (request, response) => {
  const { first_name, last_name, email, date_of_birth, pswd } = request.body
  console.log(request.body)

  pool.query(
    'INSERT INTO users (first_name, last_name, email, date_of_birth, pswd) VALUES ($1, $2, $3, $4, $5)',
    [first_name, last_name, email, date_of_birth, pswd],
    (error, results) => {
      console.log(results)
      if (error) {
        //stops and returns the error to the requestee. good for testing. was 'throw' error before which crashes node
        return response.status(400).send(error)
      }
      response.status(201).send(`User added`)
    }
  )
}
const updateUser = (request, response) => {
  const user_id = parseInt(request.params.user_id)
  const { first_name, last_name, email, date_of_birth, pswd } = request.body

  //checks for existing user first, then modifies

  pool.query(
    'SELECT first_name, last_name, email FROM users WHERE user_id = $1',
    [user_id],
    (error, results) => {
      if (results.rowCount === 0) {
        return response
          .status(200)
          .json({ response: `no user found with user_id: ${user_id}` })
      }
      if (error) {
        return response.status(400).send(error)
      }

      //need to push through ALL parameters, even if not changed. populate form with default values.
      //stops and returns the error to the requestee via response.send(). good for testing. was 'throw' error before which crashes node

      pool.query(
        'UPDATE users SET first_name = $1, last_name = $2, email = $3, date_of_birth = $4, pswd = $5 WHERE user_id = $6',
        [first_name, last_name, email, date_of_birth, pswd, user_id],
        (error, results) => {
          if (error) {
            return response.status(400).send(error)
          }
          response.status(200).send(`User modified with ID: ${user_id}`)
        }
      )
    }
  )
}
const deleteUser = (request, response) => {
  const user_id = parseInt(request.params.user_id)

  pool.query(
    'DELETE FROM users WHERE user_id = $1',
    [user_id],
    (error, results) => {
      if (results.rowCount === 0) {
        return response.status(200).send(`No user with id: ${user_id} found`)
      }
      if (error) {
        return response.send(error)
      }
      response.status(200).send(`User deleted with ID: ${user_id}`)
    }
  )
}
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
