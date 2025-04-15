const express = require("express");
const router = express.Router();

const { Comments } = require("../models");

// get all comments from the comments table
router.get("/:postId", async (req, res) => {
    const postId = req.params.postId; // grab the post id from the request
    const comments = await Comments.findAll({where: {postId: postId}});
    res.json(comments);
});

router.post("/", async (req, res) => {
    const comment = req.body; // grab the comment object from the request body
    await Comments.create(comment).then(comment => {
        res.json(comment);
    });
});



module.exports = router;