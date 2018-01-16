const backSoundsPath = '../resources/sounds/inapoi.mp3';
const repeatGame = new Audio();
repeatGame.src = '../resources/sounds/repeat-game.mp3';

$(document).ready(() => {
    let backSong = new Audio();
    let $backBtn = $('.back-btn');
    backSong.src = backSoundsPath;

    $backBtn.click(() => {
        window.location.href = '../index.html';
    });

    $backBtn.hover(
        () => {
            backSong.src = backSoundsPath;
            backSong.play();
        },
        () => {
            backSong.pause();
            backSong.currentTime = 0;
        }
    );
});