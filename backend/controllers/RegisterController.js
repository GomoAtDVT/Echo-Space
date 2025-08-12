import {client} from "../index.js";
import bcrypt from "bcrypt"
export const RegisterController = async (req, res) => {
    const { username, email, password, display_picture, bio } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const insert_query = `INSERT INTO users (username, email, password, display_picture, bio) VALUES ($1, $2, $3, $4, $5)`;

    client.query(insert_query, [username, email, hashedPassword, display_picture, bio], (err, result) =>{
        if (err) {
            res.json(err);
        } else {
            res.json("Hello " + username + "! You're registered!");
        }
    })

}