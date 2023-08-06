let manipulateResult = document.getElementById("manipulateResult")
let manipulateBtn = document.getElementById("manipulateBtn")

function randomTextGen(){
    let textArr = [
        'CSE te shudhu chill ar chill',
        "MERN has a future", 
        "Rabbil Hasan", 
        "I am Navid Al Faiyaz Provi", 
        "I am proud to be a Bangladeshi", 
        "I love my mom", 
        "My hobby is travelling and leading the world"
    ]

    let randNum = Math.floor( Math.random() * textArr.length )
    while (randNum === previousNum) {
        randNum = Math.floor(Math.random() * textArr.length);
      }
    manipulateResult.innerText = textArr[randNum]
    previousNum = randNum
}

manipulateBtn.addEventListener('click', randomTextGen)
let previousNum = -1 