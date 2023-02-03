import { questionArr } from "./questionsData.js";

const startGameButton = document.getElementById('start-button')
const containerElement = document.getElementById('quastions-container')
const answerElement = document.querySelector('.answears-container')
const priceElement = document.querySelector('.price')
const priceElement1 = document.querySelector('.price1')
const submitButton = document.getElementById('submit-button')
const nextButton = document.getElementById('next-button')
const PlayAgaiButtonGameOver = document.querySelector('.play-again-gameover')
const PlayAgaiButtonWinner = document.querySelector('.play-again-winner')
const gameOverView = document.querySelector(".gameover-container")
const winGameView = document.querySelector(".winer-container")

const canvas = document.querySelector('#confetti')

const aAnswer = document.getElementById('A')
const bAnswer = document.getElementById('B')
const cAnswer = document.getElementById('C')
const dAnswer = document.getElementById('D')

answerElement.style.display = "none"
gameOverView.style.display = "none"
winGameView.style.display = "none"

const jsConfetti = new JSConfetti()

let index = 0;
let price = 0;
let answearKeeper = '';

const generateNumer = () => {
    index = Math.round(Math.random() * 10)
    console.log(index)
}

startGameButton.addEventListener('click', () => {

    startGameButton.style.display = "none"
    answerElement.style.display = "block"   //showe element 
    gameOverView.style.display = "none"
    winGameView.style.display = "none"
    price = 1000;
    generateNumer()
    nextQuestions()
})


const playAgain = () => {
    answerElement.style.display = "block"   //showe element 
    startGameButton.style.display = "none"
    gameOverView.style.display = "none"
    winGameView.style.display = "none"
    price = 1000;
    generateNumer()
    nextQuestions()
}

PlayAgaiButtonGameOver.addEventListener('click', () => {
    playAgain()
})

PlayAgaiButtonWinner.addEventListener('click', () => {
    playAgain()
})

aAnswer.addEventListener('click', () => {
    answearKeeper = aAnswer.innerText
})
bAnswer.addEventListener('click', () => {
    answearKeeper = bAnswer.innerText

})
cAnswer.addEventListener('click', () => {
    answearKeeper = cAnswer.innerText

})
dAnswer.addEventListener('click', () => {
    answearKeeper = dAnswer.innerText

})
submitButton.addEventListener('click', () => {
    checkAnswear()
    checkWinner()
})

const checkAnswear = () => {
    if (questionArr[index].answer === answearKeeper) {
        priceIncrise()
    } else if (questionArr[index].answer !== answearKeeper) {
        gameOver()
    }
}

const priceIncrise = () => {
    price = (price * 2)
}

const gameOver = () => {
    answerElement.style.display = "none"
    startGameButton.style.display = "none"
    gameOverView.style.display = "block"
    winGameView.style.display = "none"
    priceElement1.innerText = price
}

const checkWinner = () => {
    if (price == 1024000) {
        return winner()
    }
}

const winner = () => {
    answerElement.style.display = "none"
    startGameButton.style.display = "none"
    gameOverView.style.display = "none"
    winGameView.style.display = "block"
    jsConfetti.addConfetti()
}

nextButton.addEventListener('click', () => {
    answearKeeper = '';
    console.log(answearKeeper + " answear keeper at next ")
    generateNumer()
    nextQuestions()

}
)

const nextQuestions = (value) => {
    containerElement.innerText = questionArr[index].question
    aAnswer.innerText = questionArr[index].optionA
    bAnswer.innerText = questionArr[index].optionB
    cAnswer.innerText = questionArr[index].optionC
    dAnswer.innerText = questionArr[index].optionD
    priceElement.innerText = "You Already Won " + price
}
