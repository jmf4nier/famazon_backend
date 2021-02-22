const pool = require('../index')

const getProducts = (request, response) => {
  pool.query('SELECT * FROM products LIMIT 25', (error, results) => {
    if (error) {
      return response.status(400).send(error)
    }

    response.status(200).json(results.rows)
  })
}

const getProductById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query(
    'SELECT * FROM products WHERE product_id = $1',
    [id],
    (error, results) => {
      //results.rows is array of found objects
      //checks for empty array
      if (results.rows.length === 0) {
        return response
          .status(200)
          .json({ response: `no product found with id: ${id}` })
      }
      if (error) {
        return response.status(400).send(error)
      }
      response.status(200).json(results.rows)
    }
  )
}

module.exports = {
  getProducts,
  getProductById,
}
