const getData = async (url, method, onSuccess) => {
    const response = await fetch(url, {
        method: method
    })

    const data = await response.json()

    if (response.status === 200) {
        onSuccess(data)
    }
}

const select = document.getElementById('select-input');

getData('http://localhost:3000/posts', 'GET', (data) => {
    console.log(data);
})
