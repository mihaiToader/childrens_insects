$(document).ready(() => {
    let $btnLearn = $('.btn-learn');
    let $btnPlay = $('.btn-play-game');
    let $canteceleAudio = $("#cantecele-audio");
    let $learnAudio = $("#learn-audio");
    let $playAudio = $("#play-audio");
    let $ambianceAudio = $("#ambiance-audio");
    let $btnCantecele = $(".btn-cantecele");
    let $btnCuriozitati = $(".curiozitati-btn");
    let $curiozitatiAudio = $("#curiozitati-audio");

    $btnLearn.click(() => {
        window.location.href = 'static/learningPage.html';
    });
    $btnPlay.click(() => {
        window.location.href = 'static/playPage.html';
    });
    $btnCantecele.click(() => {
        window.location.href = 'static/cantecele.html';
    });

    $btnCuriozitati.click(() => {
        window.location.href = 'static/curiozitati.html';
    });

    $btnLearn.hover(
        () => {
            $learnAudio.trigger('play');
        },
        () => {
            $learnAudio.trigger('pause');
            $learnAudio.prop("currentTime",0);
        });

    $btnPlay.hover(
        () => {
            $playAudio.trigger('play');
        },
        () => {
            $playAudio.trigger('pause');
            $playAudio.prop("currentTime",0);
        });

    $btnCantecele.hover(
        () => {
            $canteceleAudio.trigger('play');
        },
        () => {
            $canteceleAudio.trigger('pause');
            $canteceleAudio.prop("currentTime",0);
        });

    $btnCuriozitati.hover(
        () => {
        $curiozitatiAudio.trigger('play');
    },
        () => {
        $curiozitatiAudio.trigger('pause');
        $curiozitatiAudio.prop("currentTime",0);
        });

    $("#play-btn").click(() => {
        $("#introduction-audio").trigger('play');
    });

    $ambianceAudio.trigger('play');

    setInterval(() => {
        $ambianceAudio.prop("currentTime",0);
        $ambianceAudio.trigger('play');
    }, 100000);

});