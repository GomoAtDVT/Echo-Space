import {client} from "../index.js";

export const RegisterController = (req, res) => {
    // res.json(`Hello ${req.body.username} you're registered`)

    const { username, email, password, display_picture, bio } = req.body;
    const insert_query = `INSERT INTO users (username, email, password, display_picture, bio) VALUES ($1, $2, $3, $4, $5)`;

    client.query(insert_query, [username, email, password, display_picture, bio], (err, result) =>{
        if (err) {
            res.json(err);
        } else {
            res.json("Hello " + username + "! You're registered!");
        }
    })

}