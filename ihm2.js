document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission for testing
    
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function(msg) {
        msg.style.display = 'none';
    });
    
    let valid = true;

    // Validation des champs
    const username = document.getElementById('username').value;
    if (username.length < 18) {
        document.getElementById('username-error').textContent = "رقم التعريف يجب ان يحتوي على 18 رقم ";
        document.getElementById('username-error').style.display = 'block';
        valid = false;
    }

    const name = document.getElementById('name').value;
    if (name.length < 12) {
        document.getElementById('name-error').textContent = "رقم الضمان يجب ان يحتوي على 12 رقم ";
        document.getElementById('name-error').style.display = 'block';
        valid = false;
    }

    // Validation du numéro de téléphone
    const operator = document.getElementById('operator').value;
    const phone = document.getElementById('phone').value;

    // Check if the operator is selected
    if (!operator) {
        document.getElementById('phone-error').textContent = "يرجى اختيار مشغل.";
        document.getElementById('phone-error').style.display = 'block';
        valid = false;
    }

    // Check phone number length and validity
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
        document.getElementById('phone-error').textContent = "رقم الهاتف يجب أن يحتوي على 10 أرقام.";
        document.getElementById('phone-error').style.display = 'block';
        valid = false;
    } else {
        // Check if the phone number starts with the correct prefix
        const prefix = operator; // Get the prefix based on the operator
        if (!phone.startsWith(prefix)) {
            document.getElementById('phone-error').textContent = `الرقم يجب أن يبدأ بـ ${prefix}.`;
            document.getElementById('phone-error').style.display = 'block';
            valid = false;
        }
    }

    // If all validations pass
    if (valid) {
        document.getElementById('notification').textContent = "!تم تاكيد المعلومات";
    }
});

// Modal for terms
const modalTerms = document.getElementById("terms-modal");
const termsButton = document.getElementById("terms-button");
const closeButtonTerms = document.getElementById("close-terms");

// Open the terms modal
termsButton.onclick = function() {
    modalTerms.style.display = "block";
}

// Close the terms modal
closeButtonTerms.onclick = function() {
    modalTerms.style.display = "none";
}

// Accept terms and close modal
document.getElementById("accept-terms").onclick = function() {
    document.getElementById('terms').checked = true;
    modalTerms.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === modalTerms) {
        modalTerms.style.display = "none";
    }
}

const modalPhoto1 = document.getElementById("photo-modal");
const usernameInput = document.getElementById("username");
const closeButtonPhoto1 = document.getElementById("close-photo1"); // Unique identifier for close button

const modalPhoto2 = document.getElementById("photo-modal2");
const nameInput = document.getElementById("name");
const closeButtonPhoto2 = document.getElementById("close-photo2"); // Unique identifier for close button

// Function to close all modals
function closeAllModals() {
    modalPhoto1.style.display = "none";
    modalPhoto2.style.display = "none";
}

// Flags to track whether modals are open
let isPhotoModal1Open = false;
let isPhotoModal2Open = false;

// Open the photo modal for username
usernameInput.onclick = function() {
    if (!isPhotoModal1Open) { // Check if the modal is not already open
        closeAllModals(); // Close other modals if open
        modalPhoto1.style.display = "block";
        isPhotoModal1Open = true; // Set the flag to true
    }
}

// Close the photo modal for username
closeButtonPhoto1.onclick = function() {
    modalPhoto1.style.display = "none";
    isPhotoModal1Open = false; // Reset the flag when closed
}

// Open the photo modal for name
nameInput.onclick = function() {
    if (!isPhotoModal2Open) { // Check if the modal is not already open
        closeAllModals(); // Close other modals if open
        modalPhoto2.style.display = "block";
        isPhotoModal2Open = true; // Set the flag to true
    }
}

// Close the photo modal for name
closeButtonPhoto2.onclick = function() {
    modalPhoto2.style.display = "none";
    isPhotoModal2Open = false; // Reset the flag when closed
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === modalPhoto1) {
        closeAllModals(); // Close all modals
        isPhotoModal1Open = false; // Reset the flag when closed
    } else if (event.target === modalPhoto2) {
        closeAllModals(); // Close all modals
        isPhotoModal2Open = false; // Reset the flag when closed
    }
}
function showForm2() {
    document.getElementById('form1').style.display = 'none';
    document.getElementById('form2').style.display = 'block'; 
    document.getElementById('step1').classList.add('completed');
    document.getElementById('progressBar').classList.add('completed');
   
}
function showForm1() {
    document.getElementById('form2').style.display = 'none';
    document.getElementById('form1').style.display = 'block'; 
    document.getElementById('step1').classList.add('completed');
    document.getElementById('progressBar').classList.add('completed');
   
}
function showForm3() {
    document.getElementById('form2').style.display = 'none';
    document.getElementById('form3').style.display = 'block';
    document.getElementById('step2').classList.add('completed');
    document.getElementById('progressBar1').classList.add('completed');
    document.getElementById('step3').classList.add('completed');
}