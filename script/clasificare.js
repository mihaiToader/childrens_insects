let storyLine = {
    sound: new Audio(),
    current: {
        object: 'BIRD',
        speaking: true,
    },
    'bird': {
        story: '../resources/sounds/birdClasificare.mp3',
        identifier: 'BIRD',
        onClick: (callback) => {$('#bird').click(callback)}
},
};
/*let nextSong = new Audio();
 let $nextBtn = $('.next-btn');

 $nextBtn.click(() => {
 setTimeout(() => {window.location.href = '../static/venn-organizare.html';}, 2000);
 storyLine.sound.pause();
 nextSong.src = '../resources/sounds/next.mp3';
 nextSong.play();
 });*/
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
});