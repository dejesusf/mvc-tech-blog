const User = require("./user");
const Post = require("./post");

Post.belongsTo(User,{
    onDelete:"CASCADE"
})
User.hasMany(Post)

module.exports = {
    User,
    Post
}