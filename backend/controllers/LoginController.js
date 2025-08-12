import {client} from "../index.js";
import bcrypt from "bcrypt"
import GenerateToken from "../middleware/GenerateToken.js";

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