//U94140233
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate the form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const eventDate = document.getElementById('eventDate').value;
    const mealPreferences = Array.from(document.querySelectorAll('input[name="mealPreference"]:checked')).map(el => el.value);

    if (!name || !email || !eventDate || mealPreferences.length === 0) {
        alert('Please fill out all fields and select at least one meal preference.');
        return;
    }

    // Append the registration details to the display area
    const registrationDetailsDiv = document.getElementById('registrationDetails');
    registrationDetailsDiv.innerHTML = `
        <h2>Registration Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Meal Preferences:</strong> ${mealPreferences.join(', ')}</p>
    `;
    
});