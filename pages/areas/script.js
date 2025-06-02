document.addEventListener('DOMContentLoaded', async function () {
    const response = await fetch(`http://localhost:3000/brinquedos/${area}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'aplication/json',
            authorization: "Bearer" + token
        },
    });

    const data = await response.json();
    console.log(data);

});

