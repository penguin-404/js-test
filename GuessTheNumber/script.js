let random = Math.floor(Math.random()*100+1)

const submitBtn = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submitBtn.addEventListener('click',function(event){
        event.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    // Validate for values between 1 and 100

    if(isNaN(guess)){
        alert('Please enter a valid Number.')
    }else if(guess<1){
        alert('Please enter greater than 1.')
    }else if(guess>100){
        alert('Please enter less than 100.')
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMsg(`GameOver. Random Number was ${random}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // to check whether the random numbers equals.

    if(guess===random){
        displayMsg(`You guessed it Right.`)
        endGame()
    }else if(guess<random){
        displayMsg(`Number is too low.`)
    }else if(guess>random){
        displayMsg(`Number is too high.`)
    }
}

function displayGuess(guess){
    // clean the values and updates the guesses and remaining slot

    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMsg(message){
    // Prints the messages for low or high.

    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">New Game</h2>`;
    startOver.appendChild(p);
    playGame = false; 
    newGame()
}

function newGame(){
    const newGameBtn = document.querySelector('#newGame')

    newGameBtn.addEventListener('click',function(event){
        random = parseInt(Math.random()*100+1);
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame= true
    })
}


