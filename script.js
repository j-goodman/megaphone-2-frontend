// 1. Write a function that reads all the posts from the DB
// 2. Create a form that allows the user to make a POST request and create a new post

const getPosts = async () => {
    const response = await fetch(`http://localhost:3000/posts`)
    const posts = await response.json()

    console.log(posts)
    return posts
}

getPosts()