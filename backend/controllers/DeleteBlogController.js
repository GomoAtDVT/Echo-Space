import {client} from "../index.js";

export const DeleteBlogController = (req, res) => {
    const {id} = req.params
    const delete_query = `DELETE FROM blogs WHERE id = $1`;

    client.query(delete_query, [id], (err, result) => {
        if (err) {
            console.log(err);
            
            res.status(500).json({ error: "Failed to delete blog" });
        }else{
            res.json("You deleted a blog")
        }
    });
}