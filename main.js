//import questionArr from "./questionsData";

const startGameButton = document.getElementById('start-button')
const containerElement = document.getElementById('quastions-container')
const answerElements = document.querySelectorAll('.button-grid')
const priceElement = document.getElementById('price')
const submitButton = document.getElementById('submit-button')
const nextButton = document.getElementById('next-button')

const aAnswer = document.getElementById('A')
const bAnswer = document.getElementById('B')
const cAnswer = document.getElementById('C')
const dAnswer = document.getElementById('D')

let index = 0;
let price = 0;
let answearKeeper = '' ;

const generateNumer = () =>{ 
    index = Math.round(Math.random() * 10)
    console.log(index)
}


startGameButton.addEventListener('click',() =>{
    price =0;
    generateNumer()
    nextQuestions()
    
})

aAnswer.addEventListener('click',()=>{
    answearKeeper = aAnswer.innerText
    console.log(answearKeeper + "this is naswear keeper")
}
)

bAnswer.addEventListener('click',()=>{
    console.log(bAnswer.innerText)
}
)
cAnswer.addEventListener('click',()=>{
    console.log(cAnswer.innerText)
}
)

dAnswer.addEventListener('click',()=>{
    console.log(dAnswer.innerText)
}
)

submitButton.addEventListener('click',()=>{

// if correct incress price , price squere 
// add confetti ,
// shaffle question and take next one 
// if wrong game over 
// compeare answear string to answear keeper string 


    console.log("submitButton")
}
)
nextButton.addEventListener('click',()=>{
    answearKeeper = '' ;
    console.log(answearKeeper + " answear keeper at next ")
    generateNumer()
    nextQuestions()
    console.log("nextButton")
}
)

const nextQuestions = (value) => {
    containerElement.innerText = questionTest[index].question
    aAnswer.innerText = questionTest[index].optionA
    bAnswer.innerText = questionTest[index].optionB
    cAnswer.innerText = questionTest[index].optionC
    dAnswer.innerText = questionTest[index].optionD
    priceElement.innerText = "You Already Won " + price
    
}


const questionTest = [
    {
        question: "What temperature does water boil at?",
        optionA: "50 degrees Celcius",
        optionB: "25 degrees Celcius",
        optionC: "100 degrees Celcius",
        optionD: "150 degrees Celcius",
        answer: "100 degrees Celcius"
    },
    {
        question: "0000002",
        optionA: "50 degrees Celcius",
        optionB: "25 degrees Celcius",
        optionC: "100 degrees Celcius",
        optionD: "150 degrees Celcius",
        answer: "100 degrees Celcius"
    },
    {
        question: "00000003",
        optionA: "50 degrees Celcius",
        optionB: "25 degrees Celcius",
        optionC: "100 degrees Celcius",
        optionD: "150 degrees Celcius",
        answer: "100 degrees Celcius"
    },
    {
        question: "00000004",
        optionA: "50 degrees Celcius",
        optionB: "25 degrees Celcius",
        optionC: "100 degrees Celcius",
        optionD: "150 degrees Celcius",
        answer: "100 degrees Celcius"
    },
    {
        question: "00000005",
        optionA: "50 degrees Celcius",
        optionB: "25 degrees Celcius",
        optionC: "100 degrees Celcius",
        optionD: "150 degrees Celcius",
        answer: "100 degrees Celcius"
    },
    {
        question: "What temperature does water boil at?",
        optionA: "50 degrees Celcius",
        optionB: "25 degrees Celcius",
        optionC: "100 degrees Celcius",
        optionD: "150 degrees Celcius",
        answer: "100 degrees Celcius"
    },
    {
        question: "0000002",
        optionA: "50 degrees Celcius",
        optionB: "25 degrees Celcius",
        optionC: "100 degrees Celcius",
        optionD: "150 degrees Celcius",
        answer: "100 degrees Celcius"
    },
    {
        question: "00000003",
        optionA: "50 degrees Celcius",
        optionB: "25 degrees Celcius",
        optionC: "100 degrees Celcius",
        optionD: "150 degrees Celcius",
        answer: "100 degrees Celcius"
    },
    {
        question: "00000004",
        optionA: "50 degrees Celcius",
        optionB: "25 degrees Celcius",
        optionC: "100 degrees Celcius",
        optionD: "150 degrees Celcius",
        answer: "100 degrees Celcius"
    },
    {
        question: "00000005",
        optionA: "50 degrees Celcius",
        optionB: "25 degrees Celcius",
        optionC: "100 degrees Celcius",
        optionD: "150 degrees Celcius",
        answer: "100 degrees Celcius"
    },
    {
        question: "What temperature does water boil at?",
        optionA: "50 degrees Celcius",
        optionB: "25 degrees Celcius",
        optionC: "100 degrees Celcius",
        optionD: "150 degrees Celcius",
        answer: "100 degrees Celcius"
    },
    {
        question: "0000002",
        optionA: "50 degrees Celcius",
        optionB: "25 degrees Celcius",
        optionC: "100 degrees Celcius",
        optionD: "150 degrees Celcius",
        answer: "100 degrees Celcius"
    },
    {
        question: "00000003",
        optionA: "50 degrees Celcius",
        optionB: "25 degrees Celcius",
        optionC: "100 degrees Celcius",
        optionD: "150 degrees Celcius",
        answer: "100 degrees Celcius"
    },
    {
        question: "00000004",
        optionA: "50 degrees Celcius",
        optionB: "25 degrees Celcius",
        optionC: "100 degrees Celcius",
        optionD: "150 degrees Celcius",
        answer: "100 degrees Celcius"
    },
    {
        question: "00000005",
        optionA: "50 degrees Celcius",
        optionB: "25 degrees Celcius",
        optionC: "100 degrees Celcius",
        optionD: "150 degrees Celcius",
        answer: "100 degrees Celcius"
    },
    ]




// const makeQuestion = (questionObject) => {
//     const questionHTML = '
//     <div class="answears-container">
//     <h1 id="price">${questionObjec.price} tag</h1>
//     <h2 id="quastions-container">${questionObjec.question}</h2>
//     <div class="button-grid">
//       <button id="A" class="button">${questionObjec.A}</button>
//       <button id="B" class="button">${questionObjec.B}</button>
//       <button id="C" class="button">${questionObjec.C}</button>
//       <button id="D" class="button">${questionObjec.D}</button>
//       <button class="submit" id="submit-button">${questionObjec.Submit}</button>
//     </div>
//     ';
//   return questionHTML;
// };








// const loadQuestions =(questions) =>{
//     containerElement.innerHTML = questions[0].question      // no access to array why ??? 
//     aAnswer.innerHTML = questions[0].optionA
//     bAnswer.innerHTML = questions[0].optionB
//     cAnswer.innerHTML = questions[0].optionC
//     dAnswer.innerHTML = questions[0].optionD

// }
// const questionTest = [

// {
//     "question": "What temperature does water boil at?",
//     "optionA": "50 degrees Celcius",
//     "optionB": "25 degrees Celcius",
//     "optionC": "100 degrees Celcius",
//     "optionD": "150 degrees Celcius",
//     "answer": "100 degrees Celcius"
// },
// ]

// const makeCard = (cardObject) => {  //HOW THIS IS WORKING BEHAIND ??? 
//     const cardHTML = `
//       <div class="card-container">
//         <img class="card__image" src="${cardObject.sprite}" alt=" image of ">
//         <h1 class="card__content">${cardObject.name}</h1>
//         <h2 class="card__heading">${cardObject.types}</h2>
//       </div>
//   `;
//     return cardHTML;
//   };

//  //populate cards on the page 
//   const populatePage = (pokemonArray) => {
//     cardContainer.innerHTML = pokemonArray.map(card => makeCard(card)).join("")
//   }
//   populatePage(pokemonArray)



//   input.addEventListener("input", hendlSearch)

 