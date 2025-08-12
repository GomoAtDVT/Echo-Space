import {client} from "../index.js";

export const LoginController = (req, res) => {
    // res.json("You're logged in")
    const {username, password} = req.body

    const login_query = `SELECT * FROM users WHERE username = $1 AND password = $2`

    client.query(login_query, [username, password], (err, result) => {
        if (err) {
            res.json(err.message);
        } else if (result.rows.length === 0) {
            res.json("User not found or incorrect password");
        } else {
            res.json("You're logged in");
        }
    })
}