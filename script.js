let words = ['JORDAN', 'VIETNAM', 'INDONESIA', 'TURKEY', 'AUSTRIA', 'GREECE', 'SPAIN', 'AUSTRALIA', 'PHILIPPINES', 'INDIA'];

let hints = ['Home to the incredible lost city of Petra',
    'Famous for marbel mountains, azure wayers etc',
    'Country with numerous islands to explore',
    'The Blue Mosque, Hagia Sophia, Grand Bazaar and a cruise down the Bosphorus',
    'Vienna’s medieval architecture, cobbled streets and quaint cafes',
    'Historical Athens and Delphi with their legendary ruins',
    'La Tomatina, Tenerife Carnival or the famous Encierro or running of the bulls.',
    'Iconic Opera House, The Great Barrier Reef, Kangaroo Island',
    'archipelago of some 7,000 islands, amazing vistas and warm hospitality',
    'Largest democracy in the world and ofcourse Taj Mahal'
];


let wrd = document.querySelector(".word");
let ht = document.getElementById("givenHint");
let guessed = document.getElementById("guess-letter");
let guessBtn = document.getElementById("guess-button");
let list = document.getElementById("correct");
let Ele = document.getElementsByTagName("li");
let result = document.getElementById("winned");
let gm = document.getElementById("game");
let hntDiv = document.getElementById("hint-div");
let attempt = document.getElementById("chanceID");

function playWINAudio() {
    let winSound = document.getElementById("winAudio");
    winSound.volume = .2;
    winSound.play();
}

function playLOSEAudio() {
    let loseSound = document.getElementById("loseAudio");
    loseSound.volume = .8;
    loseSound.play();
}

function CorrectGUESSAudio() {
    let goodSound = document.getElementById("correctGuess");
    goodSound.volume = .8;
    goodSound.play();
}

function WrongGUESSAudio() {
    let badSound = document.getElementById("wrongGuess");
    badSound.volume = .8;
    badSound.play();
}


window.addEventListener('load', function() {
    result.style.display = 'none';
});


let length = words.length;

function GetRandomValue() {
    let x = Math.floor((Math.random() * length) + 0);
    return x;
}


let wordValue = '';
let hintValue = '';

function AskRiddle() {
    let val = GetRandomValue();
    wordValue = words[val];
    hintValue = hints[val];
    // console.log(wordValue);
    ht.innerText = hintValue;
}

function CorrectWord() {
    for (let i of wordValue) {
        let li = document.createElement('li');
        li.classList.add("active");
        li.textContent = i;
        list.appendChild(li);
    }
}


let count = 0;

function win() {
    count = 0;
    for (let i of Ele) {
        if (i.classList.contains('active')) {
            count++;
        }
    }
    return count;
}

function attemptsLeft(num) {
    document.getElementById("attempts").innerHTML = 10 - num;
}

let clickCounter = 1;

function Check() {
    for (let i of Ele) {
        if (guessed.value.toUpperCase() == i.innerText) {
            i.classList.remove("active");
            CorrectGUESSAudio();
        }
    }

    attemptsLeft(clickCounter);

    let res = win();
    if (res == 0) {
        result.style.display = 'block';
        gm.style.display = "none";
        attempt.style.display = "none";
        playWINAudio();
        document.getElementById("resultant").innerText = "CONGRATULATIONS......You Won !!";
    }
    // console.log(clickCounter)
    if (clickCounter > 9) {
        result.style.display = 'block';
        gm.style.display = "none";
        attempt.style.display = "none";
        playLOSEAudio();
        document.getElementById("resultant").innerHTML = "<span style='color: #FF4433;'>You lose.....Try Again <i class=fa>&#xf54c</i></span>";
        clickCounter = 1;
    }
    clickCounter++;
    guessed.value = '';
}



function refreshPage() {
    window.location.reload();
}


AskRiddle();
CorrectWord();