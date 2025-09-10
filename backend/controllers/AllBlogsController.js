import { client } from "../index.js";

/**
 * @description Get all the blogs
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Object} a JSON object with all the blogs
 * or a JSON object with an error message if the server encounters an error
 */
export const AllBlogsController = (req, res) => {
  client.query("SELECT * FROM blogs", (err, result) => {
    if (!err) {
      res.json(result.rows);
    } else {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch blogs" });
    }
  });
};
