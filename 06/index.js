const getData = async (url, method) => {
    const response = await fetch(url, {
        method: method
    })

    const data = await response.json()

    console.log(data);
}
