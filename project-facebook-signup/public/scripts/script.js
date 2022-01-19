const emailouTelefone = document.querySelector('#emailoutelefone');
const genders = document.querySelector('#genders');
const signupData = document.querySelector('.facebook-signup');

document.querySelector('#button-login').addEventListener('click', () => {
  if (emailouTelefone.value === '') {
    alert('Insira o email e a senha');
  } else {
    alert(emailouTelefone.value);
  }
});

document.querySelector('#genders').addEventListener('click', (e) => {
  const genderInput = document.getElementsByName('gender-custom');
  if (e.target.id === 'radioCustom') {
    if (genderInput[0]) {
      return undefined;
    }
    const inputCustom = genders.appendChild(document.createElement('input'));
    inputCustom.name = 'gender-custom';
    inputCustom.placeholder = 'Gênero (opcional)';
  } else {
    genderInput[0].remove();
  }
});

function criarMensagem(valores) {
  const val = (k) => valores.get(k);

  document.querySelector('.right-content').innerHTML = `
  <h1>Olá, ${val('firstname')} ${val('lastname')}</h1>
  <p>Email ou Telefone: ${val('phone_email')}</p>
  <p>Data de Nascimento: ${val('birthdate')}</p>
  <p>Gênero: ${val('gender')}</p>
  `;
}

signupData.addEventListener('submit', (ev) => {
  let i = 0;
  ev.preventDefault();
  const formData = new FormData(signupData);

  formData.forEach(() => { i += 1; });

  if (i < 6) {
    if (document.querySelector('#errMsg')) {
      document.querySelector('#errMsg').remove();
    }
    const errMsg = signupData.appendChild(document.createElement('p'));
    [errMsg.innerHTML, errMsg.style.color] = ['Campos Inválidos', 'red'];
    errMsg.id = 'errMsg';
  } else {
    criarMensagem(formData);
  }
});
