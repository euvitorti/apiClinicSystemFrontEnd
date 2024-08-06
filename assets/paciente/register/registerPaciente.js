import { getDefaultHeaders } from '../../header/header';

// Função para registrar um novo paciente
function registerPatient(event) {
    event.preventDefault();

    // Captura os valores dos campos de entrada
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var phone = document.querySelector('#phone').value;
    var cpf = document.querySelector('#cpf').value;
    var street = document.querySelector('#street').value;
    var neighborhood = document.querySelector('#neighborhood').value;
    var cep = document.querySelector('#cep').value;
    var city = document.querySelector('#city').value;
    var uf = document.querySelector('#uf').value;
    var number = document.querySelector('#number').value;
    var complement = document.querySelector('#complement').value;

    // Cria um objeto com os dados do paciente
    var patientData = {
        name: name,
        email: email,
        phone: phone,
        cpf: cpf,
        address: {
            street: street,
            neighborhood: neighborhood,
            cep: cep,
            city: city,
            uf: uf,
            number: number,
            complement: complement
        }
    };
    var token = getToken();

    // Envia uma requisição POST para registrar o paciente
    fetch('http://localhost:8080/pacientes', {
        method: 'POST',
        headers: getDefaultHeaders(),
        body: JSON.stringify(patientData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Registration failed.');
        }
        return response.json();
    })
    .then(data => {
        alert('Patient registered successfully!');
        window.location.href = 'menu.html'; // Redireciona após o registro bem-sucedido
    })
    .catch(error => {
        document.getElementById('error-message').innerText = 'Registration failed. Please check your inputs.';
        console.error('Registration error:', error);
    });
}

// Adiciona um event listener para o evento 'submit' do formulário de registro
document.querySelector('#register-form').addEventListener('submit', registerPatient);
