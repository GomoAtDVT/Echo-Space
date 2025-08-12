import { client } from "../index.js";

export const SingleBlogController = (req, res) => {
  const { id } = req.params;
  const single_query = `SELECT * FROM blogs WHERE id = $1`;
  client.query(single_query, [id], (err, result) => {
    if (!err) {
        res.json(result.rows);
    } else {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch blog" });
    }
  });
};
