const rock = document.querySelector('.Orock');
const paper = document.querySelector('.Opaper');
const scissors = document.querySelector('.Oscissors');
const play = document.querySelector('.button-play');
const options = ['rock', 'paper', 'scissors'];
let playerValue;
let opponentValue;

rock.addEventListener('click', () => choose('rock'));
paper.addEventListener('click', () => choose('paper'));
scissors.addEventListener('click', () => choose('scissors'));
play.addEventListener('click', () => checkResult(playerValue));

function choose(option) {
    playerValue = option;
    return alert(playerValue);
}

function checkResult(playerValue) {
    opponentValue = getRandom(options)
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
    return  options[Math.floor(Math.random() * options.length)]; 
}

