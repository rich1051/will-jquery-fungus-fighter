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
};

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM


function attackArcane(event) {
    event.preventDefault()
    if (playerAP < 12) {
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('jump');
        $('.hp-text').text(fungusHP);
    }
    else if (fungusHP < 14) {
        fungusHP = 0;
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('dead');
        $('.hp-text').text(playerAP);
    }
    else {
        playerAP -= 12;
        fungusHP -= 14;
        $('.hp-text').text(fungusHP);
        $('.ap-text').text(playerAP);
    }
    console.log('Arcane Scepter activated!');
    };

function attackEntangle(event) {
    event.preventDefault()
    if (playerAP < 23) {
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('jump');
        $('.hp-text').text(fungusHP);
    }
    else if (fungusHP <= 9) {
        fungusHP = 0;
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('dead');
        $('.hp-text').text(playerAP);
    }
    else {
        playerAP -= 23;
        fungusHP -= 9;
        $('.hp-text').text(fungusHP);
        $('.ap-text').text(playerAP);
    }
    console.log('Entangle activated!');
    };

function attackDragon(event) {
    event.preventDefault()
    if (playerAP < 38) {
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('jump');
        $('.hp-text').text(fungusHP);
    }
    else if (fungusHP <= 47) {
        fungusHP = 0;
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('dead');
        $('.hp-text').text(playerAP);
    }
    else {
        playerAP -= 38;
        fungusHP -= 47;
        $('.hp-text').text(fungusHP);
        $('.ap-text').text(playerAP);
    }
    console.log('Dragon Blade activated!');
    };

function attackStar(event) {
    event.preventDefault()
    if (playerAP < 33) {
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('jump');
        $('.hp-text').text(fungusHP);
    }
    else if (fungusHP <= 25) {
        fungusHP = 0;
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('dead');
        $('.hp-text').text(playerAP);
    }
    else {
        playerAP -= 33;
        fungusHP -= 25;
        $('.hp-text').text(fungusHP);
        $('.ap-text').text(playerAP);
    }
    console.log('Star Fire activated!');
    };

