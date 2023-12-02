const axios = require('axios');

// #1
// create function: deletePost
// arg1: postId
// remove post with: postId from database
// return: void -> console message: 'success' or 'fail'
const deletePost = async (postId) => {
    const response = await axios.delete(`http://localhost:3000/posts/${postId}`)

    console.log(response);
}

// #2
// PATCH or PUT
// create function: updatePost
// arg1: postId
// arg2: requestBody
// update post with id: postId
// return: void -> console message: 'success' or 'fail'
const updatePost = async (postId, requestBody) => {
    const response = await axios.patch(`http://localhost:3000/posts/${postId}`, requestBody)

    console.log(response);
}

updatePost(1, { title: 'super new title' })
