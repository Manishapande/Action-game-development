score=0;
cross=true;
document.onkeydown = function(e){
    console.log("key code is", e.keyCode);
    if(e.keyCode==38){
        cat = document.querySelector('.cat');
        cat.classList.add('animateCat');
        setTimeout(()=>{
            cat.classList.remove('animateCat');

        },700)
    };

    if(e.keyCode==37){
        cat = document.querySelector('.cat');

        catX= parseInt(window.getComputedStyle(cat,null).getPropertyValue('right'));
        cat.style.right = catX + 112 + "px";
    };

    if(e.keyCode==39){
        cat = document.querySelector('.cat');

        catX= parseInt(window.getComputedStyle(cat,null).getPropertyValue('right'));
        cat.style.right = catX - 112 + "px";
    };


    

    
}


setInterval(() => {

    cat = document.querySelector('.cat');
    dragon = document.querySelector('.dragon');

    over = document.querySelector('.over');

    cx=parseInt(window.getComputedStyle(cat , null).getPropertyValue('right'));
    cy=parseInt(window.getComputedStyle(cat , null).getPropertyValue('top'));


    dx=parseInt(window.getComputedStyle(dragon , null).getPropertyValue('right'));
    dy=parseInt(window.getComputedStyle(dragon , null).getPropertyValue('top'));


    offsetX = Math.abs(cx-dx);
    offsetY = Math.abs(cy-dy);

    if(offsetX <90 && offsetY < 52)
    {
        over.style.visibility = 'visible';
        dragon.classList.remove('dragonAni')
    }
     else if(offsetX < 145 && cross)
    {
        score+=1;
     updateScore(score);
     cross=false;
     setTimeout(() => {
        cross=true;
     }, 1000);

    setTimeout(() => {
        anidur= parsefloat(window.getComputedStyle(dragon,null).getPropertyValue('animation-duration'));
        newdur= anidur - 0.1;
        dragon.style.animationDuration = newdur + "s";
   
    }, 500);

    }   
    
}, 100);


function updateScore(score){
    scorecont.innerHTML = "Your score: " + score
}


