const soundsPath = '../resources/sounds/';
var insect = new Audio();
insect.src = soundsPath + 'buburuza-ghicitoare.mp3';
var duration = insect.duration;
setTimeout("insect.play()", 1000);

var wrong = new Audio();
wrong.src = '../resources/sounds/tryagain.mp3';

var correct = new Audio();
correct.src = '../resources/sounds/correctAnswer.mp3';

var pageIndex = 2;
const imagesPath = '../resources/images/';
const wrongAnswer = 'wrong.play()';
const correctAnswer = 'handleCorrectAnswer()';
const finish = 'location.href=\'finish.html\'';


var game = {
    1: {
        question: 'buburuza-ghicitoare.mp3'
    },
    2: {
        question: 'fluture-ghicitoare.mp3',
        1: {
            src: 'butterfly.png',
            onClick: correctAnswer,
        },
        2: {
            src: 'fly.png',
            onClick: wrongAnswer,
        },
        3: {
            src: 'bee.png',
            onClick: wrongAnswer
        },
        4: {
            src: 'mosquito.jpg',
            onClick: wrongAnswer
        }
    },
    3: {
        question: 'greiere-ghicitoare.mp3',
        1: {
            src: 'ladybug.png',
            onClick: wrongAnswer
        },
        2: {
            src: 'cricket.jpg',
            onClick: correctAnswer,
        },
        3: {
            src: 'ant.jpg',
            onClick: wrongAnswer
        },
        4: {
            src: 'fly.png',
            onClick: wrongAnswer
        }
    },
    4: {
        question: 'albina-ghicitoare.mp3',
        1: {
            src: 'mosquito.jpg',
            onClick: wrongAnswer
        },
        2: {
            src: 'butterfly.png',
            onClick: wrongAnswer
        },
        3: {
            src: 'bee.png',
            onClick: correctAnswer,
        },
        4: {
            src: 'cricket.jpg',
            onClick: wrongAnswer
        }
    },
    5: {
        question: 'tantar-ghicitoare.mp3',
        1: {
            src: 'ant.jpg',
            onClick: wrongAnswer
        },
        2: {
            src: 'cricket.jpg',
            onClick: wrongAnswer
        },
        3: {
            src: 'ladybug.png',
            onClick: wrongAnswer
        },
        4: {
            src: 'mosquito.jpg',
            onClick: correctAnswer,
        }
    },
    6: {
        question: 'furnica-ghicitoare.mp3',
        1: {
            src: 'bee.png',
            onClick: wrongAnswer
        },
        2: {
            src: 'butterfly.png',
            onClick: wrongAnswer
        },
        3: {
            src: 'ant.jpg',
            onClick: correctAnswer,
        },
        4: {
            src: 'ladybug.png',
            onClick: wrongAnswer
        }
    },
    7: {
        question: 'musca-ghicitoare.mp3',
        1: {
            src: 'fly.png',
            onClick: finish,
        },
        2: {
            src: 'bee.png',
            onClick: wrongAnswer
        },
        3: {
            src: 'cricket.jpg',
            onClick: wrongAnswer
        },
        4: {
            src: 'butterfly.png',
            onClick: wrongAnswer
        }
    }
};

function playQuestion() {
    insect = new Audio();
    insect.src = soundsPath + game[pageIndex].question;
    duration = insect.duration;
    console.log("pQ", duration);
    setTimeout("insect.play()", 1000);
}

var firstOption, secondOption, thirdOption, fourthOption;

function enable() {
    firstOption.setAttribute("onclick", game[pageIndex][1].onClick);
    secondOption.setAttribute("onclick", game[pageIndex][2].onClick);
    thirdOption.setAttribute("onclick", game[pageIndex][3].onClick);
    fourthOption.setAttribute("onclick", game[pageIndex][4].onClick);
    pageIndex++;
}

function nextPage() {
    console.log("game", game);
    console.log("game[index]", game[pageIndex]);
    console.log("game[index]", game[pageIndex][1]);
    firstOption = document.getElementById('first-option');
    firstOption.setAttribute("src", imagesPath + game[pageIndex][1].src);
    firstOption.removeAttribute("onclick");

    secondOption = document.getElementById('second-option');
    secondOption.setAttribute("src", imagesPath + game[pageIndex][2].src);
    secondOption.removeAttribute("onclick");

    thirdOption = document.getElementById('third-option');
    thirdOption.setAttribute("src", imagesPath + game[pageIndex][3].src);
    thirdOption.removeAttribute("onclick");

    fourthOption = document.getElementById('fourth-option');
    fourthOption.setAttribute("src", imagesPath + game[pageIndex][4].src);
    fourthOption.removeAttribute("onclick");


    playQuestion();
    console.log("np", duration);
    setTimeout("enable()", duration + 10000);
}

function repeatQuestion() {
    insect.pause();
    insect.currentTime = 0;
    insect.src = soundsPath + game[pageIndex - 1].question;
    insect.play();
}

function handleCorrectAnswer() {
    insect.pause();
    insect.currentTime = 0;
    correct.play();
    setTimeout("nextPage()", 3000)
}