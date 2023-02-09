const User = require("./user");
const Post = require("./post");
const Comment= require("./comment")

//a post belongs to a user
Post.belongsTo(User,{
    onDelete:"CASCADE"
})
//a user may have many posts
User.hasMany(Post)

//a post may have many comments
Post.hasMany(Comment)

module.exports = {
    User,
    Post,
    Comment
}