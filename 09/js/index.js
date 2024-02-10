const getData = async (url, method, body, onSuccess) => {
    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(body)
    })

    const data = await response.json()

    if (response.status === 200) {
        onSuccess(data)
    } else {
        console.erorr('Bad request')
    }
}

const customForm = document.getElementById('custom-form');

customForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const titleInput = document.getElementById('title-input')
    const authorInput = document.getElementById('author-input')

    if (titleInput.value !== '' && authorInput.value !== '') {
        getData(
            `http://localhost:3000/posts`, 
            'POST',
            { title: titleInput.value, author: authorInput.value },
            (data) => {
            console.log(data);
        })
    }        
})
