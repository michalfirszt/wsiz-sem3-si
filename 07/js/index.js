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
const input = document.getElementById('text-input');

button.addEventListener('click', async () => {
    const ulList = document.getElementById('list');
    const objectContent = document.getElementById('object-content');
    const url = input.value;

    await getData(url, 'GET', (data) => {
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
