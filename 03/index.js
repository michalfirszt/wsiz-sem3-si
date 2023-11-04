const axios = require('axios');

// Check all Resources:
// http://localhost:3000/posts
// http://localhost:3000/comments
// http://localhost:3000/profile

// #1
// create 3 function to get all data
// getAllPosts
// getAllCommendts
// getProfile

const getAllPosts = async () => {
    const response = await axios.get('http://localhost:3000/posts')

    console.log(response.data)
}

const getAllCommendts = async () => {
    const response = await axios.get('http://localhost:3000/comments')

    console.log(response.data)
}

const getProfile = async () => {
    const response = await axios.get('http://localhost:3000/profile')

    console.log(response.data)
}

getAllPosts()
getAllCommendts()
getProfile()
