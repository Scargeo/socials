/// const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    const posts = sequelize.define("posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    // This is the association between the posts and comments tables
    posts.associate = (models) => {
        posts.hasMany(models.Comments, {
            onDelete: "cascade", // If a post is deleted, delete all associated comments
        });
    }; 




    return posts;
}