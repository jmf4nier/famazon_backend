const pool =  require('../index')




const getItems = (request, response) => {
    pool.query("SELECT first_name, last_name, email FROM items ORDER BY id ASC limit 20", (error, results) => {
        if (error) {
            throw error;
        }
        
        response.status(200).json(results.rows);
    });
};

const getItemById = (request, response) => {
    
    const id = parseInt(request.params.id);

    pool.query("SELECT title, description, images FROM items WHERE id = $1", [id], (error, results) => {
        
        //results.rows is array of found objects
        //checks for empty array
        if (results.rows.length === 0){
            
            return response.status(200).json({response: `no product found with id: ${id}`});
        }
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

module.exports = {
    getItems,
    getItemById,
  }