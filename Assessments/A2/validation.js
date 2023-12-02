// Function to validate the registration form
function validateForm() {
    // Fetching input values
    const nameInput = document.getElementById('name');
    const mobileInput = document.getElementById('mobile');
    const CityInput = document.getElementById('City');
    const PincodeInput = document.getElementById('Pincode');
    const AddressInput = document.getElementById('Address');

    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z]{4,8}$/;
    const mobileRegex = /^[0-9]{10}$/;
    const CityRegex = /^[a-zA-Z]{4,8}$/;
    const PincodeRegex = /^[0-9]{10}$/;

    // Regular expression for Address
const AddressRegex = /^[a-zA-Z0-9\s,'-]+$/;

    // Validation for Name
    if (!nameRegex.test(nameInput.value)) {
        alert('Name should contain 4 to 8 alphabets only.');
        nameInput.focus();
        return;
    }
    // Validation for Mobile
    if (! mobileRegex.test( mobileInput.value)) {
        alert('Name should contain 10 digits only.');
        mobileInput.focus();
        return;
    }

    // Validation for City
    if (!CityRegex.test(CityInput.value)) {
        alert('City should contain 4 to 8 alphabets only.');
        CityInputInput.focus();
        return;
    }
    // Validation for Pincode
    if (!PincodeRegex.test(PincodeInput.value)) {
        alert('Pincode should contain 6 digits only.');
        PincodeInput.focus();
        return;
    }
    // Validation for Address
    if (! AddressRegex.test( AddressInput.value)) {
        alert(' Address should contain alphabets,digits and special characters only.');
        AddressInput.focus();
        return;
    }

    // If all validations pass, submit the form
    alert('Form submitted successfully!');
    document.getElementById('registrationForm').submit();
}
