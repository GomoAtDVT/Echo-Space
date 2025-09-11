import { client } from "../index.js";
import bcrypt from "bcrypt";

/**
 * Handles user registration
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {string} req.body.username - user's username
 * @param {string} req.body.email - user's email
 * @param {string} req.body.password - user's password
 * @param {string} req.body.display_picture - user's display picture
 * @param {string} req.body.bio - user's bio
 * @returns {Object} a JSON object with a message if the registration is successful, or a JSON object with an error message if the registration fails
 * @throws {Error} if there is an error with the database query
 */
export const RegisterController = async (req, res) => {
  const { username, email, password, display_picture, bio } = req.body;
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  const insert_query = `INSERT INTO users (username, email, password, display_picture, bio) VALUES ($1, $2, $3, $4, $5)`;
 
  client.query(
    insert_query,
    [username, email, hashedPassword, display_picture, bio],
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json("Hello " + username + "! You're registered!");
      }
    }
  );
};
