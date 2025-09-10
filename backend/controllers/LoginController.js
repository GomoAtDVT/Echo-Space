import {client} from "../index.js";
import bcrypt from "bcrypt"
import GenerateToken from "../middleware/GenerateToken.js";

/**
 * @description Handles user login
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {string} req.body.email - user's email
 * @param {string} req.body.password - user's password
 * @returns {Object} a JSON object with a message and a token if the login is
 * successful, or a JSON object with an error message if the login fails
 * @throws {Error} if there is an error with the database query
 */
export const LoginController = async (req, res) => {
    try{
    const {email, password} = req.body;
    const login_query = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const output = await client.query(login_query, values);
    const comparison = await bcrypt.compare(password, output.rows[0].password);
    const user = {id : output.rows[0].id};
    const UserToken = GenerateToken(user);
    if (comparison) {
       return res.json({message:"You're logged in", token : UserToken})
    }
    return res.json("Wrong Password")
    }catch(error){
        console.log("Error logging in", error)
        res.json({"User not found ": error})
    }
}