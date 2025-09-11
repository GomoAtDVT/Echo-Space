import {client} from "../index.js";
export const EditBlogController = (req, res) => {
   
    const {id} = req.params
    const {title, content} = req.body 
    const edit_query = `UPDATE blogs SET title = $1, content = $2 WHERE id = $3`

    client.query(edit_query, [title, content, id], (err, result) => {
        if (!err) {
            res.json("Your blog has been edited");
        }else{
            console.log(err); 
            res.status(500).json({ error: "Failed to edit blog" });
        } 
    });
}  