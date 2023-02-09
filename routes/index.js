const express= require('express');
const router= express.Router();

const userRoutes= require('./user-route');
router.use("/api/users",userRoutes);

const postRoutes= require('./post-route');
router.use("/api/posts",postRoutes);

// const commentRoute= require('./comment-route');
// router.use("/api/comments",commentRoute);

const frontEndRoutes = require('./frontend-route');
router.use("/",frontEndRoutes);

module.exports = router;