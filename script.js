function nextStep(step) {
    // Hide current step
    document.getElementById('step-' + step).style.display = 'none';
    
    // Show next step
    document.getElementById('step-' + (step + 1)).style.display = 'block';

    // If we are at the last step (confirmation), populate the confirmation data
    if (step === 6) {
        document.getElementById('confirmFirstName').textContent = document.getElementById('firstName').value;
        document.getElementById('confirmLastName').textContent = document.getElementById('lastName').value;
        document.getElementById('confirmCheckIn').textContent = document.getElementById('checkIn').value;
        document.getElementById('confirmCheckOut').textContent = document.getElementById('checkOut').value;
        document.getElementById('confirmCarModel').textContent = document.getElementById('carModel').value;
        document.getElementById('confirmMessage').textContent = document.getElementById('message').value;
    }
}

function submitForm() {
    // Hide the form and show success message
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
}
