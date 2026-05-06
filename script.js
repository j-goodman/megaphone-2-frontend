const form = document.getElementById("new-post-form")
const baseURL = `http://localhost:3000`

const getPosts = async () => {
    const response = await fetch(`${baseURL}/posts`)
    const posts = await response.json()

    return posts
}

form.addEventListener("submit", async (event) => {
    event.preventDefault()

    await fetch(
        `${baseURL}/posts`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                body: form.elements.body.value,
                author: form.elements.user.value
            })
        }
    ).then((response) => {
        return response.json()
    })

    form.reset()
})