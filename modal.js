'use strict';
// Selecting Elements
const modal = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const button = document.querySelectorAll('.btn');
const buttons = document.querySelector('.btns');
const close = document.querySelector('.close');

// Function to open modal.
const openModal = function(){
    buttons.classList.add("hidden");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
// Function to close modal.
const closeModal = function(){
    buttons.classList.remove("hidden");
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// looping openModal function to all buttons.
for(let i=0; i< button.length; i++){
    button[i].addEventListener('click', openModal);
}

// close modal when user click on close button.
close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// close modal when user press ESC key.
document.addEventListener('keydown', function(kp){
    // Checking if ESC key was pressed and modal is open.
    if(kp.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});