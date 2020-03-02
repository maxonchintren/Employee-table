function post(data) {
    fetch('https://employee-table-fa1eb.firebaseio.com/initialData.json', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json' 
            }
        })
            .then(response => response.json())
            .then(json => console.log(json, data))
}

function get(setFunc) {
    fetch(`https://employee-table-fa1eb.firebaseio.com/initialData.json`)
    .then(response => response.json())
    .then(json => json)
}

export {post, get}