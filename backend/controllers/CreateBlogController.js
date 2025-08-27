import { client } from "../index.js";

export const CreateBlogController = (req, res) => {
  const user_id = req.user &&req.user.id;
  const { title, content} = req.body;
  const insert_query = `INSERT INTO blogs (title, content, user_id) VALUES ($1, $2, $3)`;

  client.query(insert_query, [title, content, user_id], (err, result) => {
    if (!err) {
      res.json("You posted a blog");
    } else {
      res.json({"FailedPost":err});
    }
  });
};
