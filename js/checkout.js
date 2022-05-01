// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var name = document.querySelector('.name');
var email = document.querySelector('.email');
var address = document.querySelector('.address');
var lastName = document.querySelector('.lastn');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');
var errorEmail = document.getElementById('errorEmail'); 
var errorAdress = document.getElementById('errorAddress');
var errorLastN = document.getElementById('errorLastN');

// Exercise 6
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    
    var name = document.querySelector('.name');
    
    if (fName.value === "" || fName.value.length < 3 || /^[A-Za-z ]+$/.test(fName.value) == false) {        
        errorName.classList.add("d-block");
        errorName.classList.add("invalid-feedback");
        fName.classList.add("border-danger");               
    }
    
    var email = document.querySelector('.email');

    if (fEmail.value == "" || fEmail.value.length < 3 || (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fEmail.value) == false)) {
        errorEmail.classList.add("d-block");
        errorEmail.classList.add("invalid-feedback");
        fEmail.classList.add("border-danger");
    }

    var address = document.querySelector('.address');

    if (fAddress.value == "" || fAddress.value.length < 3) {
        errorAdress.classList.add("d-block");
        errorAdress.classList.add("invalid-feedback");
        fAddress.classList.add("border-danger");
    }

    var lastName = document.querySelector('.lastn');

    if (fLastN.value === "" || fLastN.value.length < 3 || /^[A-Za-z ]+$/.test(fLastN.value) == false) {        
        errorLastN.classList.add("d-block");
        errorLastN.classList.add("invalid-feedback");
        fLastN.classList.add("border-danger");               
    }

    var password = document.querySelector(".password");

    if (fPassword.value === "" || fPassword.value.length < 4 || fPassword.value.length > 8 || /^[A-Za-z]\w{7,14}$/.test(fLastN.value) == false) {        
        errorPassword.classList.add("d-block");
        errorPassword.classList.add("invalid-feedback");
        fPassword.classList.add("border-danger");               
    }

    var phone = document.querySelector('.phone');

    if (fPhone.value === "" || fPhone.value.length < 9 ||  /^[0-9]+$/.test(fPhone.value) == false) {        
        errorPhone.classList.add("d-block");
        errorPhone.classList.add("invalid-feedback");
        fPhone.classList.add("border-danger");               
    }

}
