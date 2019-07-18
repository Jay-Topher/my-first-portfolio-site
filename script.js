// input fields
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const message = document.getElementById('message');

// form
const form = document.getElementById('myForm');


//Validation colors
const green = '#4CAF50';
const red = '#F44336';

// // handle form
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
// });


// utility fns
function isEmpty(value){
    if(value === '') return true;
    return false;
}

function checkIfEmpty(field) {
    if(isEmpty(field.value.trim())) {
        // set field invalid
        setInvalid(field, `${field.name} must not be empty`);
        return true;
    } else {
        setValid(field);
        return false;
    }
}

function setInvalid(field, message) {
    // use class="is-valid" for fields and class="valid-feedback"
    // field.className = 'is-invalid';
    // field.nextElementSibling.className = 'invalid-feedback';
    // add text to the div after
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
    console.log(message);
}

function setValid(field) {
    //change classes
    // field.className = 'is-valid';
    // field.nextElementSibling.className = 'valid-feedback';
    // add text to div
    field.nextElementSibling.innerHTML = 'Looks good!'
    field.nextElementSibling.style.color = green;
}

function onlyLetters(field) {
    if(/^[a-zA-Z ]+$/.test(field.value)) {
        // if field contains a-z or A-Z
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} must contain only letters`);
        return false;
    }
}

function meetlength(field, minLength, maxLength) {
    if(field.value.length >= minLength && field.value.length <= maxLength){
        setValid(field);
        return true;
    } else if(field.value.length < minLength){
        setInvalid(field, `${field.name} must be at least ${minLength} characters long`);
        return false;
    } else {
        setInvalid(field, `${field.name} must mot exceed ${maxLength} characters`);
        return false;
    }
}

// email validation
let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function containsCharacters(field) {
    if(field.value.match(regEx)) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, 'Must be a valid email address');
        return false;
    }
}

// validation fns

function validateFirstName(){
    //check if empty
    if(checkIfEmpty(firstName)) return;
    // check only letters
    if(!onlyLetters(firstName)) return;
    return true;

}



// document.getElementById("MyElement").classList.add('MyClass');

// document.getElementById("MyElement").classList.remove('MyClass');

// if ( document.getElementById("MyElement").classList.contains('MyClass') )

// document.getElementById("MyElement").classList.toggle('MyClass');