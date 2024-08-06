import { getDefaultHeaders } from '../../header/header';

document.getElementById('list-doctor-button').addEventListener('click', function() {

    fetch('http://localhost:8080/medicos', {
        method: 'GET',
        headers: getDefaultHeaders()
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        var tableBody = document.querySelector('#patients-table tbody');
        tableBody.innerHTML = ''; // Clear existing data

        if (data.content && data.content.length > 0) {
            data.content.forEach(doctor => {
                var row = document.createElement('tr');

                var nameCell = document.createElement('td');
                nameCell.textContent = doctor.name;
                row.appendChild(nameCell);

                var emailCell = document.createElement('td');
                emailCell.textContent = doctor.email;
                row.appendChild(emailCell);

                var crmCell = document.createElement('td');
                crmCell.textContent = doctor.crm;
                row.appendChild(crmCell);

                var specialtyCell = document.createElement('td');
                specialtyCell.textContent = doctor.specialty;
                row.appendChild(specialtyCell);

                tableBody.appendChild(row);
            });
        } else {
            console.error('No doctors found in response');
        }
    })
    .catch(error => {
        console.error('Error fetching patients:', error);
    });
});
