document.addEventListener('DOMContentLoaded', function() {
    const cgpaForm = document.getElementById('cgpaForm');
    const resultDiv = document.getElementById('result');

    cgpaForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(cgpaForm);
        var data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.text())
        .then(result => {
            resultDiv.innerHTML = "Your CGPA Is: " + result;
        })
        .catch(error => console.error('Error:', error));
    });
});
