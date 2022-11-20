const Comment = require('../models/comments-model');

const createComment = (req, res) => {
    let commentData = req.body;

    let comment = new Comment(commentData);

    comment.save((error, createdComment) => {
        if (error){
            console.log(error);
        }
        else{
            res.send({status : 200, comments : createdComment})
        }
    });
};

module.exports = {
    createComment,
}