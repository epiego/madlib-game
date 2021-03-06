// import functions and grab DOM elements


const noun1 = document.getElementById('noun-1');
const noun2 = document.getElementById('noun-2');
const noun3 = document.getElementById('noun-3');
const noun4 = document.getElementById('noun-4');

const verb1 = document.getElementById('verb-1');
const verb2 = document.getElementById('verb-2');
const verb3 = document.getElementById('verb-3');

const adjective1 = document.getElementById('adj-1');
const adjective2 = document.getElementById('adj-2');

const input1 = document.getElementById('noun-1-input');
const input2 = document.getElementById('verb-1-input');
const input3 = document.getElementById('adj-1-input');
const input4 = document.getElementById('noun-2-input');
const input5 = document.getElementById('verb-2-input');
const input6 = document.getElementById('adj-2-input');
const input7 = document.getElementById('noun-3-input');
const input8 = document.getElementById('noun-4-input');
const input9 = document.getElementById('verb-3-input');

const button = document.getElementById('create-button');
const toggle = document.getElementById('hidden');

// initialize state



// set event listeners to update state and DOM

button.addEventListener('click', () => {
    noun1.textContent = input1.value;
    noun2.textContent = input2.value;
    noun3.textContent = input3.value;
    noun4.textContent = input4.value;
    verb1.textContent = input5.value;
    verb2.textContent = input6.value;
    verb3.textContent = input7.value;
    adjective1.textContent = input8.value;
    adjective2.textContent = input9.value;
    toggle.style.display = 'block';

})