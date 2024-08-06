import { getDefaultHeaders } from '../../header/header';

document.getElementById('delete-patient-button').addEventListener('click', function () {

    var patientId = document.getElementById('patient-id').value;

    if (!patientId) {
        console.error('Patient ID is required');
        document.getElementById('error-message').innerText = 'Patient ID is required.';
        return;
    }

    fetch(`http://localhost:8080/pacientes/${patientId}`, {
        method: 'DELETE',
        headers: getDefaultHeaders()
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text(); // DELETE geralmente não retorna JSON
        })
        .then(data => {
            alert('Patient deleted successfully!');
            document.getElementById('error-message').innerText = '';
        })
        .catch(error => {
            document.getElementById('error-message').innerText = 'Error deleting patient. Please try again.';
            console.error('Error deleting patient:', error);
        });
});
