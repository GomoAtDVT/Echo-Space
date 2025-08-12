import {client} from "../index.js";

export const EditProfileController = (req, res) => {
    const { id } = req.params;
    const { username, email, password, display_picture, bio } = req.body;

    if (!id || !username || !email || !password || !display_picture || !bio) {
        res.status(400).json({ error: "Missing required fields" });
        return; 
    }

    const edit_profile_query = `UPDATE users SET username = $1, email = $2, password = $3, display_picture = $4, bio = $5 WHERE id = $6`;

    client.query(edit_profile_query, [username, email, password, display_picture, bio, id], (err, result) => {
        if (!err ) {
            res.status(200).json("Your profile has been edited");
        } else if (err) {
            console.log(err);
            res.status(500).json({ error: "Failed to edit profile" });
        } else {
            res.status(404).json("User not found");
        }
    })
}
