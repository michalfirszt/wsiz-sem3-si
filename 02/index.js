const axios = require('axios');

const getPostsData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

    // console.log(response.status)
    console.log(response.data)
}

const getSelectedPost = async (postId) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)

    console.log(response.data)
}

getSelectedPost(5)
// getPostsData()
