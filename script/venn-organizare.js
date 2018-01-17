let storyLine = {
    sound: new Audio(),
    current: {
        object: 'ORGANIZARE',
        speaking: true,
    },
    'organizare': {
        story: '../resources/sounds/organizareDiagrame.mp3',
        identifier: 'ORGANIZARE',
        onClick: (callback) => {$('#organizare').click(callback)}
    },
};

$(document).ready(() => {
    storyLine.sound.src = storyLine.organizare.story;
    storyLine.sound.play();

    let backSong = new Audio();
    let $backBtn = $('.back-btn');

    $backBtn.click(() => {
        setTimeout(() => {window.location.href = '../index.html';}, 2000);
    storyLine.sound.pause();
    backSong.src = '../resources/sounds/back.mp3';
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

    clickOnCartoon('organizare');

});