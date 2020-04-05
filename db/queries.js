const Pool = require("pg").Pool;
const pool = new Pool({
    user: "jason",
    host: "localhost",
    database: "famazon",
    password: '12345',
    port: 5432,
});

const getUsers = (request, response) => {
    pool.query("SELECT * FROM users ORDER BY id ASC limit 20", (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

const getUserById = (request, response) => {
    
    const id = parseInt(request.params.id);

    pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
        console.log(results.rows)
        //results.rows is array of found objects
        //checks for empty array
        if (results.rows.length === 0){
            
            return response.status(200).json({response: `no user found with id: ${id}`});
        }
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const createUser = (request, response) => {
    const {first_name, last_name, email, gender} = request.body;

    pool.query(
        "INSERT INTO users (first_name, last_name, email, gender) VALUES ($1, $2, $3, $4)",
        [ first_name, last_name, email, gender],
        (error, results) => {
            console.log(results)
            if (error) {
                throw error;
            }
            response.status(201).send(`User added`);
        }
    );
};
const updateUser = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, email } = request.body;

    pool.query(
        "UPDATE users SET name = $1, email = $2 WHERE id = $3",
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).send(`User modified with ID: ${id}`);
        }
    );
};
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`User deleted with ID: ${id}`);
    });
};
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }