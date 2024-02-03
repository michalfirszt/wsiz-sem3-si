const getData = async (url, method, onSuccess) => {
    const response = await fetch(url, {
        method: method
    })

    const data = await response.json()

    if (response.status === 200) {
        onSuccess(data)
    } else {
        console.erorr('Bad request')
    }
}

const select = document.getElementById('select-input');

getData('http://localhost:3000/posts', 'GET', (data) => {
    data.forEach((post) => {
        const option = document.createElement('option')
        option.value = post.id;
        option.textContent = post.title;

        select.appendChild(option);
    })
})

const removeButton = document.getElementById('remove-button')

removeButton.addEventListener('click', () => {
    getData(`http://localhost:3000/posts/${select.value}`, 'DELETE', () => {
        select.remove(select.selectedIndex)
    })
})
