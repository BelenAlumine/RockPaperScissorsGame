const rock = document.querySelector('.Orock');
const paper = document.querySelector('.Opaper');
const scissors = document.querySelector('.Oscissors');
const play = document.querySelector('.button-play');
const options = ['rock', 'paper', 'scissors'];
let resultTitle = document.getElementById("header-result");
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

const results = {
    'rock-scissors' : 'The opponent chose scissors, you win!',
    'paper-rock' : 'The opponent chose rock, you win!',
    'scissors-paper' : 'The opponent chose paper, you win!',

    'rock-paper' : 'The opponent chose paper, you lose!',
    'paper-scissors' : 'The opponent chose scissors, you lose!',
    'scissors-rock' : 'The opponent chose rock, you lose!',

    'scissors-scissors' : 'The opponent chose scissors, you tied!',
    'rock-rock' : 'The opponent chose rock, you tied!',
    'paper-paper' : 'The opponent chose paper, you tied!',
}

function checkResult(playerValue) {
    opponentValue = getRandom(options)
    result = playerValue + '-' + opponentValue;
    
    resultTitle.innerText = results[result];
}

function getRandom(options) {
    opponentValue = options[Math.floor(Math.random() * options.length)]; 
    opponentOption.setAttribute('src', imgValue(opponentValue));
    
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