// Simula carregamento de dados do usuário
const user = {
    first_name: 'Millie',
    last_name: 'Bobby Brown',
    email: 'millie@example.com',
    birth_date: '2004-02-19',
    phone: '(11) 99999-9999'
  };
  
  window.onload = () => {
    for (const key in user) {
      const span = document.getElementById(key);
      if (span) span.textContent = user[key];
    }
  };
  
  const inputFoto = document.getElementById('inputFoto');
  const fotoPerfil = document.getElementById('fotoPerfil');
  
  inputFoto.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      fotoPerfil.src = URL.createObjectURL(file);
    }
  });
  