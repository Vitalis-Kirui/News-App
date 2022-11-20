const express = require('express');
const router = express.Router();
const commentsControllers = require('../controllers/comments-controllers');

// Writting a comment function
router.post('/write-comment', commentsControllers.createComment);

// getting all comments
router.get('/all-comments', commentsControllers.getComments);

module.exports =router;