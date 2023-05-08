$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let playerAP = 100

function onReady() {
    $('.attacks').on('click', functionAttack)

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function functionAttack() {
    if ($('.attack-btn arcane-scepter')) {
        console.log('arcane scepter activated!');
    }
    else if ($('.attack-btn entangle')) {
        console.log('entangle activated!');
    }
    else if ($('.attack-btn dragon-blade')) {
        console.log('dragon blade activated!');
    }
    else if ($('.attack-btn star-fire')) {
        console.log('star fire activated!');
    }

}