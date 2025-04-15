/// const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    // // This is the association between the posts and comments tables
    // Users.associate = (models) => {
    //     Users.hasMany(models.Users, {
    //         onDelete: "cascade", // If a post is deleted, delete all associated comments
    //     });
    // }; 

 


    return Users;
}