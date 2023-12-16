const rock = document.querySelector('.Orock');
const paper = document.querySelector('.Opaper');
const scissors = document.querySelector('.Oscissors');
const play = document.querySelector('.button-play');
const options = ['rock', 'paper', 'scissors'];
let playerValue;
let opponentValue;

////////////////////////////////////
const rockImg = './img/Rock.png';
const paperImg = './img/Paper.png';
const scissorsImg = './img/Sccissor.png';
let opponentOption = document.querySelector('.question-Mark');
////////////////////////////////////

rock.addEventListener('click', () => choose('rock'));
paper.addEventListener('click', () => choose('paper'));
scissors.addEventListener('click', () => choose('scissors'));
play.addEventListener('click', () => checkResult(playerValue));

function choose(option) {
    playerValue = option;
}

function checkResult(playerValue) {
    opponentValue = getRandom(options)

    if (playerValue === 1) {
        if (opponentValue === 0) {
            //opponentOption.setAttribute('src', imgValue(opponentValue));
            return alert('oponnent choose ' + opponentValue + ' You win!');
        }
        else if (opponentValue === 1) {
            //opponentOption.setAttribute('src', imgValue(opponentValue));
            return alert('oponnent choose ' + opponentValue + ' You tie, try again!');
        }
    }
    
    if (playerValue === 'rock') {
        if (opponentValue === 'scissors') {
            //opponentOption.setAttribute('src', imgValue(opponentValue));
            return alert('oponnent choose ' + opponentValue + ' You win!');
        }
        else if (opponentValue === 'rock') {
            //opponentOption.setAttribute('src', imgValue(opponentValue));
            return alert('oponnent choose ' + opponentValue + ' You tie, try again!');
        }
    }
    
    if (playerValue === 'scissors') {
        if (opponentValue === 'paper') {
            //opponentOption.setAttribute('src', imgValue(opponentValue));
            return alert('oponnent choose ' + opponentValue + ' You win!');
        }
        else if (opponentValue === 'scissors') {
            //opponentOption.setAttribute('src', imgValue(opponentValue));
            return alert('oponnent choose ' + opponentValue + ' You tie, try again!');
        }
    }
    else {
        return alert('oponnent choose ' + opponentValue + ' You lose!, try again!');
    }
}

function getRandom(options) {
    opponentValue = options[Math.floor(Math.random() * options.length)]; 
    opponentOption.setAttribute('src', imgValue(opponentValue));
    
    return opponentValue;
}

function imgValue(opponentValue) {
    if (opponentValue === 'rock') {
        rockImg;
    }
    else if (opponentValue === 'paper') {
        paperImg;
    }
    else if (opponentValue === 'scissors') {
        scissorsImg;
    }
}