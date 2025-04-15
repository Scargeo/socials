const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const { Users } = require("../models");

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
        });
        res.json("User created!");
    }
    );
}); 

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    // check if user exists
    const user = await Users.findOne({ where:
        { username: username } });

    if (!user) {
        res.json({ error: "User Doesn't Exist!" });
    }

    // check if password is correct
    bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
            res.json({ error: "Wrong Username and Password Combination!" });
        }
        res.json("You Logged In!");
    });








});



module.exports = router;
