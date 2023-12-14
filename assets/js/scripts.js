const rock = document.querySelector('.Orock');
const paper = document.querySelector('.Opaper');
const scissors = document.querySelector('.Oscissors');
const play = document.querySelector('.button-play');
const options = ['rock', 'paper', 'scissors'];
let playerValue;


rock.addEventListener('click', choose('rock'));
paper.addEventListener('click', choose('paper'));
scissors.addEventListener('click', choose('scissors'));
play.addEventListener('click', checkResult(playerValue));

function choose(option) {
    playerValue = option;
    return alert(playerValue);
}

function checkResult(playerValue) {
    if (playerValue === paper) {
        if (getRandom(options) === rock) {
            return alert('You win!');
        }
        else if (getRandom(options) === paper) {
            return alert('You tie, try again!');
        }
    }
    
    if (playerValue === rock) {
        if (getRandom(options) === scissors) {
            return alert('You win!');
        }
        else if (getRandom(options) === rock) {
            return alert('You tie, try again!');
        }
    }

    if (playerValue === scissors) {
        if (getRandom(options) === paper) {
            return alert('You win!');
        }
        else if (getRandom(options) === scissors) {
            return alert('You tie, try again!');
        }
    }

    else {
        return alert('You lose!, try again!');
    }
}

function getRandom(options) {
    return Math.floor(Math.random() * options.length); 
} 