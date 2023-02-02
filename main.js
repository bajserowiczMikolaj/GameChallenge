import {questionArr} from "./questionsData.js";

const startGameButton = document.getElementById('start-button')
const containerElement = document.getElementById('quastions-container')
const answerElement = document.querySelector('.answears-container')
const priceElement = document.getElementById('price')
const submitButton = document.getElementById('submit-button')
const nextButton = document.getElementById('next-button')
const gameOverElement = document.querySelector('.game-over')
const aAnswer = document.getElementById('A')
const bAnswer = document.getElementById('B')
const cAnswer = document.getElementById('C')
const dAnswer = document.getElementById('D')

answerElement.style.display = "none"   //hide element
gameOverElement.style.display="none"

let index = 0; 
let price = 0;
let answearKeeper = '' ;

const generateNumer = () =>{ 
    index = Math.round(Math.random() * 10)
    console.log(index)
}

startGameButton.addEventListener('click',() =>{
    answerElement.style.display = "block"   //showe element 
    startGameButton.style.display ="none" 
    gameOverElement.style.display="none"  //hide element 
    price =1000;
    generateNumer()
    nextQuestions()
})

aAnswer.addEventListener('click',()=>{
    answearKeeper = aAnswer.innerText
    console.log(answearKeeper + "this is naswear keeper")
}
)

bAnswer.addEventListener('click',()=>{
    answearKeeper = bAnswer.innerText
    console.log(bAnswer.innerText)
}
)
cAnswer.addEventListener('click',()=>{
    answearKeeper = cAnswer.innerText
    console.log(cAnswer.innerText)
}
)

dAnswer.addEventListener('click',()=>{
    answearKeeper = dAnswer.innerText
    console.log(dAnswer.innerText)
}
)

submitButton.addEventListener('click',()=>{              // compare two string now !!!!!!!! answear keapper === answear ---> next question if not game over 

// if correct incress price , price squere 
// add confetti ,
// shaffle question and take next one 
// if wrong game over 
// compeare answear string to answear keeper string 
    console.log("submitButton")
    checkAnswear()
}) 

const checkAnswear = ()=>{   //compare string 
if (questionArr[index].answer === answearKeeper) {
    priceIncrise()
console.log("good answear!!!")
    
}else if(questionArr[index].answer !== answearKeeper) 
{console.log("wrong answear!!!!!!!")
 gameOver()
}}

const priceIncrise =()=>{
 price = (price * 2)
}

const gameOver = () => {
    gameOverElement.style.display="block"
    answerElement.style.display = "none"
    startGameButton.style.display ="block"
}


nextButton.addEventListener('click',()=>{
    answearKeeper = '' ;    //clear answear keeper 
    console.log(answearKeeper + " answear keeper at next ")
    generateNumer()
    nextQuestions()
    console.log("nextButton")
}
)

const nextQuestions = (value) => {

    //if price ==== 1024 you are the winner 
    // else display next question 
    containerElement.innerText = questionArr[index].question
    aAnswer.innerText = questionArr[index].optionA
    bAnswer.innerText = questionArr[index].optionB
    cAnswer.innerText = questionArr[index].optionC
    dAnswer.innerText = questionArr[index].optionD
    priceElement.innerText = "You Already Won " + price
}
