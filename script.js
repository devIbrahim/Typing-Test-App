const wordList = [
    "hello",
    "school",
    "computer",
    "toolkit",
    "relaxation",
    "temporal",
    "rendezvous",
    "forwarding",
    "nightmare",
    "airplane",
    "reductions",
    "southampton",
    "istanbul",
    "impose",
    "organisms",
    "sega",
    "telescope",
    "viewers",
    "asbestos",
    "portsmouth",
    "cdna",
    "meyer",
    "enters",
    "internship",
    "lone",
    "refresh",
    "aluminium",
    "snowboard",
    "beastality",
    "webcast",
    "michel",
    "evanescence",
    "subtle",
    "coordinated",
    "notre",
    "shipments",
    "maldives",
    "stripes",
    "firmware",
    "antarctica",
    "canberra",
    "cradle",
    "chancellor",
    "mambo",
    "lime",
    "kirk",
    "flour",
    "controversy",
    "legendary",
    "bool",
    "sympathy",
    "choir",
    "avoiding",
    "beautifully",
    "blond",
    "expects",
    "jumping",
    "fabrics",
    "antibodies",
    "polymer",
    "hygiene",
    "threatening",
    "spokesman",
    "zoloft",
    "activists",
    "frankfurt",
    "prisoner",
    "daisy",
    "halifax",
    "encourages",
    "ultram",
    "cursor",
    "assembled",
    "earliest",
    "donated",
    "stuffed",
    "restructuring",
    "insects",
    "terminals",
    "crude",
    "morrison",
    "maiden",
    "simulations",
    "is",
    "for",
    "to",
    "us",
    "we",
    "you",
    "can",
    "talk",
    "poem",
    "twins",
    "cute",
    "slow",
    "fast",
    "hand",
    "home"
];

//CONSTANTS
const app = document.querySelector(".app");
const genText = document.querySelector('.gen-text'); 
const userInput = document.querySelector(".user-input");
const timeLeft = document.querySelector(".remaining-time")
let myArray = [];
const minute1 = 60000;
const errorsDisplay = document.querySelector(".errors-span");
const correctDisplay = document.querySelector(".correct-span");
const resultContainer = document.querySelector(".result-container");

function init(){

    //GENERATE RANDOM WORD
    function genRanWord(){
        let randomIndex = Math.floor(Math.random() * wordList.length);
        let randomWord = wordList[randomIndex];
        genText.textContent = randomWord;
    }

    userInput.addEventListener("keyup", keyupEvent);

    function keyupEvent(e){

        //START AND STOP TIMER
        if(myArray.length<1){
            myArray.push(1);
            if(myArray.length === 1){
                let startTimer = setInterval(() => {
                    timeLeft.textContent--;
                }, 1000);
                setTimeout(() => {
                    clearInterval(startTimer);
                    gameOver();
                }, minute1);
            }
        }

        //SPACEBAR PRESSED
        if(e.which === 32){
            let correctWord;
            if(userInput.value.trim() == genText.textContent){
                correctWord = true;
            }
            if(correctWord){
                genRanWord();
                userInput.value="";
                correctDisplay.textContent++;
                if(Array.from(userInput.classList).includes("error")){
                    userInput.classList.remove("error");
                }
            }else{
                userInput.classList.add("error");
                errorsDisplay.textContent++;
            }
        }

        function gameOver(){
            app.remove();
            resultContainer.style.display = "flex";
            let correctEntities = correctDisplay.textContent-errorsDisplay.textContent;
            let accuracy = Math.round((correctEntities/correctDisplay.textContent) * 100);
            document.querySelector(".totalWords").textContent = correctDisplay.textContent;
            document.querySelector(".totalErrors").textContent = errorsDisplay.textContent;
            document.querySelector(".accuracySpan").textContent = accuracy;
            document.querySelector(".timeSpan").textContent = 60;
            document.querySelector(".play-again").addEventListener("click", () => {
                location.reload();
            });
        }
    }

genRanWord();

}

init();