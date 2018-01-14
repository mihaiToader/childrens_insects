let storyLine = {
    sound: new Audio(),
    current: {
        object: 'BIRD',
        speaking: true,
    },
    'bird': {
        story: '../resources/sounds/birdStory.mp3',
        identifier: 'BIRD',
        onClick: (callback) => {$('#bird').click(callback)}
    },
    'fly': {
        story: '../resources/sounds/musca-descriere2.mp3',
        identifier: 'FLY',
        onClick: (callback) => {$('#fly').click(callback)}
    },
    'ant': {
        story: '../resources/sounds/furnica-descriere.mp3',
        identifier: 'ANT',
        onClick: (callback) => {$('#ant').click(callback)}
    },
    'ladybug': {
        story: '../resources/sounds/buburuza-descriere.mp3',
        identifier: 'LADYBUG',
        onClick: (callback) => {$('#ladybug').click(callback)}
    },
    'bee': {
        story: '../resources/sounds/albina-descriere.mp3',
        identifier: 'BEE',
        onClick: (callback) => {$('#bee').click(callback)}
    },
    'mosquito': {
        story: '../resources/sounds/tantar-descriere.mp3',
        identifier: 'MOSQUITO',
        onClick: (callback) => {$('#mosquito').click(callback)}
    },
    'cricket': {
        story: '../resources/sounds/greiere-descriere.mp3',
        identifier: 'CRICKET',
        onClick: (callback) => {$('#cricket').click(callback)}
    },
    'butterfly': {
        story: '../resources/sounds/fluture-descriere.mp3',
        identifier: 'BUTTERFLY',
        onClick: (callback) => {$('#butterfly').click(callback)}
    },
};

$(document).ready(() => {
    storyLine.sound.src = storyLine.bird.story;
    storyLine.sound.play();

    let backSong = new Audio();
    let $backBtn = $('.back-btn');

    $backBtn.click(() => {
        setTimeout(() => {window.location.href = '../index.html';}, 10000);
        storyLine.sound.pause();
        backSong.src = '../resources/sounds/incheiere-poveste2.mp3';
        backSong.play();
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
    clickOnCartoon('fly');
    clickOnCartoon('ant');
    clickOnCartoon('ladybug');
    clickOnCartoon('bee');
    clickOnCartoon('cricket');
    clickOnCartoon('mosquito');
    clickOnCartoon('butterfly');

});