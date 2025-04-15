const express = require("express");
const router = express.Router();

const { posts } = require("../models");

// get all posts from the posts table
router.get('/', async (req, res) => {
    const listOfPosts = await posts.findAll();
    res.json(listOfPosts);
});
  
router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const post = await posts.findByPk(id);
    res.json(post);
});

router.post('/', async (req, res) => {
    const post = req.body; // grab the post object from the request body
    await posts.create(post).then(post => {
        res.json(post);
    });
}); 





module.exports = router;
