const birdSoundsPath = '../resources/sounds/vreti_sa_ascultati-cantecele-despre.mp3';
const birdAnotherSongPath = '../resources/sounds/hai-sa-invatam-alt-cantec.mp3';
$(document).ready(() => {
    let $insectsMenu = $("#insects-menu");
    let $song = $(".song");
    let $songFrame = $(".song-video");
    let $bird = $('#bird');
    let $birdBack = $('#bird-back');
    let birdSong = new Audio();
    birdSong.src = birdSoundsPath;

    birdSong.play();

    $bird.click(() => {
        birdSong.src = birdSoundsPath;
        birdSong.play();
    });

    $birdBack.hover(
        () => {
            birdSong.src = birdAnotherSongPath;
            birdSong.play();
        },
        () => {
            birdSong.pause();
            birdSong.currentTime = 0;
        }
    );

    $birdBack.click(() => {
        $insectsMenu.css({'display': 'block'});
        $song.css({'display': 'none'});
        $bird.css({'display': 'block'});
        $birdBack.css({'display': 'none'});
        $songFrame.attr('src','');
    });

    const openSong = () => {
        birdSong.pause();
        $insectsMenu.css({'display': 'none'});
        $song.css({'display': 'flex'});
        $bird.css({'display': 'none'});
        $birdBack.css({'display': 'block'});
    };

    $("#butterfly").click(() => {
        $songFrame.attr('src','https://www.youtube.com/embed/NFiv07zmkJ4?autoplay=1');
        openSong();
    });

    $("#bee").click(() => {
        $songFrame.attr('src','https://www.youtube.com/embed/18lUP3He9cA?autoplay=1');
        openSong();
    });

    $("#ant").click(() => {
        $songFrame.attr('src','https://www.youtube.com/embed/0l16CxvGUY8?autoplay=1');
        openSong();
    });

    $("#cricket").click(() => {
        $songFrame.attr('src','https://www.youtube.com/embed/h_pdIGakCF4?autoplay=1');
        openSong();
    });

    $("#ladybug").click(() => {
        $songFrame.attr('src','https://www.youtube.com/embed/9152_GZo3Uo?autoplay=1');
        openSong();
    });

});