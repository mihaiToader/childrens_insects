let storyLine = {
    sound: new Audio(),
    current: {
        object: 'BIRD',
        speaking: true,
    },
    'bird': {
        story: '../resources/sounds/birdDeosebiri.mp3',
        identifier: 'BIRD',
        onClick: (callback) => {$('#bird').click(callback)}
    },
    'aripi': {
        story: '../resources/sounds/aripi.mp3',
            identifier: 'ARIPI',
            onClick: (callback) => {$('#aripi').click(callback)}
    },
    'mediu': {
        story: '../resources/sounds/mediu.mp3',
            identifier: 'MEDIU',
            onClick: (callback) => {$('#mediu').click(callback)}
    },
    'grup': {
        story: '../resources/sounds/grup.mp3',
            identifier: 'GRUP',
            onClick: (callback) => {$('#grup').click(callback)}
    },
};

$(document).ready(() => {
    storyLine.sound.src = storyLine.bird.story;
storyLine.sound.play();

let nextSong = new Audio();
let $nextBtn = $('.next-btn');

$nextBtn.click(() => {
    setTimeout(() => {window.location.href = '../static/curiozitati-diagrame.html';}, 2000);
storyLine.sound.pause();
nextSong.src = '../resources/sounds/next.mp3';
nextSong.play();
});

const clickOnCartoon = (cartoon) => {
    storyLine[cartoon].onClick(() => {
        if (storyLine.current.object !== storyLine[cartoon].identifier) {
        storyLine.current.object = storyLine[cartoon].identifier;
        storyLine.current.speaking = true;
        storyLine.sound.src = storyLine[cartoon].story;
        storyLine.sound.play();
    } else if (storyLine.current.speaking) {
        storyLine.current.speaking = false;
        storyLine.sound.pause();
    } else {
        storyLine.current.speaking = true;
        storyLine.sound.play();
    }
});
};
clickOnCartoon('bird');
clickOnCartoon('aripi');
clickOnCartoon('mediu');
clickOnCartoon('grup');
});