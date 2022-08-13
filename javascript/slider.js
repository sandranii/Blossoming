function $id(id){
    return document.getElementById(id);
}

window.addEventListener("load", function(){
    let slider = document.querySelector(".slider");
    let curIndex=0;

    $id("btnLeft").onclick = function(){
        clearInterval(timerId);
        curIndex--; 
        slider.style.left = -300 * curIndex+ 'px';
        if(curIndex == 0){
             $id("btnLeft").disabled = true;
        }
        $id("btnRight").disabled = false; 
        setInterval(run,1000);       
    }
    $id("btnRight").onclick = function(){
        clearInterval(timerId);
        if(curIndex>=4){
            $id("btnRight").disabled = true;
        }else{
            curIndex++;
            slider.style.left = -300 * curIndex+ 'px';  
        }
        $id("btnLeft").disabled = false;
        setInterval(run,1000);       

    }

    let timerId;
    function run() {
        timerId = setInterval( function () {
            curIndex++;
            slider.style.left = -300 * curIndex + 'px';
            slider.style.transition = 'left 0.7s linear';
            if(curIndex >= 4){
                clearInterval(timerId);
            }
        }, 1000);
        // return;
    }
    run();

});

