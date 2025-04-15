const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); // allow requests from all origins
app.use(express.json()); // parse incoming request with JSON payloads 

const db = require("./models")

// routers for different resources
const postRouter = require("./routes/Post");
app.use("/posts", postRouter);

const commentsRouter = require("./routes/comment"); // import the comments router
app.use("/comments", commentsRouter);

const usersRouter = require("./routes/Users"); // import the comments router
app.use("/auth", usersRouter);


db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
        });
})

