document.getElementById('register-patient').addEventListener('click', function () {
    window.location.href = '../paciente/register/registerPaciente.html';
});

document.getElementById('list-patients').addEventListener('click', function () {
    window.location.href = '../paciente/get/listPacientes.html';
});

document.getElementById('update-patients').addEventListener('click', function () {
    window.location.href = '../paciente/update/updatePaciente.html';
});

document.getElementById('search-patients').addEventListener('click', function () {
    window.location.href = '../paciente/get/searchOnePaciente.html';
});

document.getElementById('delete-patients').addEventListener('click', function () {
    window.location.href = '../paciente/delete/deletePaciente.html';
});

document.getElementById('register-doctor').addEventListener('click', function () {
    window.location.href = '../doctor/register/registerDoctor.html';
});

document.getElementById('list-doctor').addEventListener('click', function () {
    window.location.href = '../doctor/get/listDoctor.html';
});

document.getElementById('update-doctor').addEventListener('click', function () {
    window.location.href = '../update/update/updateDoctor.html';
});

document.getElementById('search-doctor').addEventListener('click', function () {
    window.location.href = '../doctor/get/searchOneDoctor.html';
});

document.getElementById('delete-doctor').addEventListener('click', function () {
    window.location.href = '../doctor/delete/deleteDoctor.html';
});

document.getElementById('consultation').addEventListener('click', function () {
    window.location.href = '../consultation/register/consultation.html';
});

document.getElementById('deleteConsultation').addEventListener('click', function () {
    window.location.href = '../consultation/delete/deleteConsultation.html';
});