// Faz a requisição ao endpoint de login
fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: 'usuario@example.com', // Substitua pelo email do usuário
        password: 'senha123'          // Substitua pela senha do usuário
    })
})
.then(response => response.json())
.then(data => {
    if (data.Token) {
        // Preenche os campos do perfil com os dados do usuário
        document.getElementById('first_name').innerText = data.user.first_name;
        document.getElementById('last_name').innerText = data.user.last_name;
        document.getElementById('email').innerText = data.user.email;
        document.getElementById('birth_date').innerText = data.user.birth_date;
        document.getElementById('phone').innerText = data.user.phone;
    } else {
        // Exibe uma mensagem de erro se o login falhar
        alert(data.Mensagem);
    }
})
.catch(error => console.error('Erro na requisição:', error));