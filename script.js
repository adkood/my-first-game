score = 0;
cross = true;
music = new Audio('music.mp3');
d_effect=new Audio('dead.mp3');
setTimeout(() => {
    music.play();
}, 1000);

document.onkeydown = function (e) {
    console.log(e.keyCode);

    if (e.keyCode == 38) {
        boy = document.querySelector('.boy');
        boy.classList.add('animateBoy');
        //removing about class after some time
        setTimeout(() => {
            boy.classList.remove('animateBoy');
        }, 700);
    }
    if (e.keyCode == 39) {
        boy = document.querySelector('.boy');
        // for getting current value
        boyx = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
        boy.style.left = boyx + 100 + 'px';
    }
    if (e.keyCode == 37) {
        boy = document.querySelector('.boy');
        // for getting current value
        boyx = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
        boy.style.left = boyx - 100 + 'px';
    }
}

setInterval(() => {

    boy = document.querySelector('.boy');
    gameOver = document.getElementById('gameOver');
    obstacle = document.getElementById('obstac');

    bx = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
    by = parseInt(window.getComputedStyle(boy, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(bx - ox);
    offsetY = Math.abs(by - oy);
    // console.log(offsetX , offsetY);

    if (offsetX < 80 && offsetY < 120 ) {
        gameOver.innerHTML='GAME OVER!! reload to start again'
        obstacle.classList.remove('obstacleAni');
        d_effect.play();
        music.pause();
    }
    else if (offsetX < 80 && cross) {
        score++;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        // delaying hiccups
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        },400);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = score;
}