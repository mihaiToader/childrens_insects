let storyLine = {
    sound: new Audio(),
    current: {
        object: 'VENNMEDIU',
        speaking: true,
    },
    'venn-mediu': {
        story: '../resources/sounds/birdDeosebiri.mp3',
        identifier: 'VENNMEDIU',
        onClick: (callback) => {$('#venn-mediu').click(callback)}
    },
'venn-mediu': {
    story: '../resources/sounds/mediuDiagrame.mp3',
        identifier: 'VENNMEDIU',
        onClick: (callback) => {$('#venn-mediu').click(callback)}
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
});