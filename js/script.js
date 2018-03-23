const fight         = new Audio('./sounds/fight.mp3'),
      backingTrack  = new Audio('./sounds/backing_track.mp3'),
      punch         = new Audio('./sounds/punch.wav'),
      shoryuken     = new Audio('./sounds/shoryuken.wav'),
      kick          = new Audio('./sounds/kick.wav'),
      highkick      = new Audio('./sounds/highkick.wav');

var   finished     = true;

$('.fight').hide();
$(document).ready(function() {
    $('.fight').fadeIn();
    fight.play();
    fight.onended = function(){
        $('.fight').fadeOut();
    }
    backingTrack.play();
    backingTrack.loop = true;
});

$(document).keypress(function(e) {    
    console.log(e.keyCode);
    if(finished){
        if(e.keyCode == 97){
            prepareAudio(punch);
            $('#player').attr('src', './images/ryu/punch.gif')
            setTimeout(function(){
                finishMov();
            }, 300)
        }

        if(e.keyCode == 100){
            prepareAudio(kick);
            $('#player').attr('src', './images/ryu/kick.gif')
            setTimeout(function(){
                finishMov();
            }, 300)
        }

        if(e.keyCode == 102){
            prepareAudio(highkick);
            $('#player').attr('src', './images/ryu/highkick.gif')
            setTimeout(function(){
                finishMov();
            }, 800)
        }
    
        if(e.keyCode == 115){
            prepareAudio(shoryuken);
            $('#player').attr('src', './images/ryu/shoryuken.gif')
            setTimeout(function(){
                finishMov();
            }, 1100)
        }
    }
});

function prepareAudio(audio){
    finished = false;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

function finishMov(){
    $('#player').attr('src', './images/ryu/idle.gif')
    finished = true;
}