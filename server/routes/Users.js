const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const { Users } = require("../models");
const {sign} = require("jsonwebtoken"); // importing sign from jsonwebtoken

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
 
        // create token
        const accessToken = sign({username: user.username, id: user.id},
            "hiddenSecretkey", {expiresIn: "1h"}); // 1 hour expiration time
        res.json(accessToken);
    });








});



module.exports = router;
