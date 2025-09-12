import { client } from "../index.js";

/**
 * @description Get a user's profile information
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {string} req.params.id - id of the user to fetch
 * @returns {Object} a JSON object with the user's profile information
 * or a JSON object with an error message if the user is not found
 * or if the server encounters an error
 */
export const ViewProfileController = (req, res) => {
  const { id } = req.params;
  const single_query = `SELECT * FROM users WHERE id = $1`;
  client.query(single_query, [id], (err, result) => {
    if (!err) {
      res.json(result.rows);
    } else if (result.rows.length === 0) {
      res.json("User not found");
    } else {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch profile" });
    }
  });
}; 
export const ViewMyProfileController = (req, res) => {
  const user_id = req.user && req.user.id;
  const single_query = `SELECT * FROM users WHERE id = $1`;
  client.query(single_query, [user_id], (err, result) => {
    if (!err) {
      res.json(result.rows);
    } else if (result.rows.length === 0) {
      res.json("User not found");
    } else {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch profile" });
    }
  });
};
