const axios = require('axios');

const createNewPost = async () => {
    const response = await axios.post('http://localhost:3000/posts', {
        id: 4,
        title: 'Awesome post :)',
        author: 'Mike'
    })

    return response;
}

const createNewComment = async (requestBody) => {
    const response = await axios.post('http://localhost:3000/comments', requestBody)

    return response;
}

const exampleComment = {
    id: 6,
    body: 'Awesome comment',
    postId: 3
}

createNewComment({ id: 5, body: 'Example body', postId: 1 })
createNewComment(exampleComment)
