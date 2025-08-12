import { client } from "../index.js";

export const AllBlogsController = (req, res) => {
  client.query("SELECT * FROM blogs", (err, result) => {
    if (!err) {
      res.json(result.rows);
    } else {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch blogs" });
    }
    client.end();
  });
};
