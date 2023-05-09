$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let playerAP = 100;

function onReady() {
    $('.arcane-scepter').on('click', attackArcane);
    $('.entangle').on('click', attackEntangle);
    $('.dragon-blade').on('click', attackDragon);
    $('.star-fire').on('click', attackStar);
}

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM


function attackArcane(event) {
    event.preventDefault()
    console.log('Arcane Scepter activated!');
    }

function attackEntangle(event) {
    event.preventDefault()
    console.log('Entangle activated!');
    }

function attackDragon(event) {
    event.preventDefault()
    console.log('Dragon Blade activated!');
    }

function attackStar(event) {
    event.preventDefault()
    console.log('Star Fire activated!');
    }

