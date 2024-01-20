const getData = async (url, method, onSuccess) => {
    const response = await fetch(url, {
        method: method
    })

    const data = await response.json()

    if (response.status === 200) {
        onSuccess(data)
    }
}

const button = document.getElementById('button');

button.addEventListener('click', async () => {
    const ulList = document.getElementById('list');
    const objectContent = document.getElementById('object-content');

    await getData('http://localhost:3000/posts/1', 'GET', (data) => {
        if (Array.isArray(data)) {
            data.forEach((dataItem) => {
                const li = document.createElement('li');
                const itemContent = document.createTextNode(dataItem.title);

                li.appendChild(itemContent);
                ulList.appendChild(li);
            })
        } else {
            const divContent = JSON.stringify(data);

            objectContent.innerHTML = divContent;
        }
    });
});
