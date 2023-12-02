// script.js

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');
const messageInput = document.getElementById('message');

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 40.7128, lng: -74.0060}
});

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const mobile = mobileInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !mobile || !message) {
        alert('Please fill out all required fields');
        return;
    }

    if (!validateName(name)) {
        alert('Name must be between 3 and 6 alphabets');
        return;
    }

    if (!validateMobile(mobile)) {
        alert('Mobile number must be 10 digits and not contain any alphabets or symbols');
        return;
    }

    // Send the form data to the server
    console.log('Form data:', {
        name,
        email,
        mobile,
        message
    });

    // Reset the form
    contactForm.reset();
});

function validateName(name) {
    return /^[a-zA-Z]+<span class="math-inline">/\.test\(name\) && name\.length \>\= 3 && name\.length <\= 6;
\}
function validateMobile\(mobile\) \{
return /^\[0\-9\]\+</span>/.test(mobile) && mobile.length === 10;
}

function initMap() {
    const marker = new google.maps.Marker({
        position: {lat: 40.7128, lng: -74.0060},
        map: map
    });}
