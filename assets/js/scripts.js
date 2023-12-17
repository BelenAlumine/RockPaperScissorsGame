const rock = document.querySelector('.Orock');
const paper = document.querySelector('.Opaper');
const scissors = document.querySelector('.Oscissors');
const play = document.querySelector('.button-play');
const options = ['rock', 'paper', 'scissors'];
let playerValue;
let opponentValue;

////////////////////////////////////
const rockImg = '../img/Rock.png';
const paperImg = '../img/Paper.png';
const scissorsImg = '../img/Scissors.png';
let opponentOption = document.querySelector('.question-Mark');
////////////////////////////////////

rock.addEventListener('click', () => choose('rock'));
paper.addEventListener('click', () => choose('paper'));
scissors.addEventListener('click', () => choose('scissors'));
play.addEventListener('click', () => checkResult(playerValue));

function choose(option) {
    //playerValue.remove(option:hover);
    playerValue = option;
    
    if (playerValue === 'rock') {
        paper.style.opacity = '100';
        scissors.style.opacity = '100';
        rock.style.opacity = '0.2';
    }
    else if (playerValue === 'paper') {
        rock.style.opacity = '100';
        scissors.style.opacity = '100';
        paper.style.opacity = '0.2';
    }
    else if (playerValue === 'scissors') {
        paper.style.opacity = '100';
        rock.style.opacity = '100';
        scissors.style.opacity = '0.2';
    }
}


function nameOption(option) {
    if (option === rock) {
        return 'rock';
    }
    else if (option === paper) {
        return 'paper';
    }
    else if (option === scissors) {
        return 'scissors';
    }
}

function checkResult(playerValue) {
    opponentValue = getRandom(options)
    opponentOption.setAttribute('src', imgValue(opponentValue));

    if (playerValue === 1) {
        if (opponentValue === 0) {
            return alert('oponnent choose ' + opponentValue + ' You win!');
        }
        else if (opponentValue === 1) {
            return alert('oponnent choose ' + opponentValue + ' You tie, try again!');
        }
    }
    
    if (playerValue === 'rock') {
        if (opponentValue === 'scissors') {
            return alert('oponnent choose ' + opponentValue + ' You win!');
        }
        else if (opponentValue === 'rock') {
            return alert('oponnent choose ' + opponentValue + ' You tie, try again!');
        }
    }
    
    if (playerValue === 'scissors') {
        if (opponentValue === 'paper') {
            return alert('oponnent choose ' + opponentValue + ' You win!');
        }
        else if (opponentValue === 'scissors') {
            return alert('oponnent choose ' + opponentValue + ' You tie, try again!');
        }
    }
    else {
        return alert('oponnent choose ' + opponentValue + ' You lose!, try again!');
    }
}

function getRandom(options) {
    opponentValue = options[Math.floor(Math.random() * options.length)]; 
 //   opponentOption.setAttribute('src', imgValue(opponentValue));
    
    return opponentValue;
}

function imgValue(opponentValue) {
    if (opponentValue === 'rock') {
        return rockImg;
    }
    else if (opponentValue === 'paper') {
        return paperImg;
    }
    else if (opponentValue === 'scissors') {
        return scissorsImg;
    }
}