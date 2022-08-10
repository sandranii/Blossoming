function $id(id){
    return document.getElementById(id);
}

window.addEventListener("load", function(){
    let slider = document.querySelector(".slider");
    let curIndex=0;

    $id("btnLeft").onclick = function(){
        curIndex--; 
        slider.style.left = -300 * curIndex+ 'px';
        if(curIndex == 0){
             $id("btnLeft").disabled = true;
        }
        $id("btnRight").disabled = false;        
    }
    $id("btnRight").onclick = function(){
        curIndex++;
        slider.style.left = -300 * curIndex+ 'px';
        if(curIndex==4){
            $id("btnRight").disabled = true;
        }
        $id("btnLeft").disabled = false;
    }
})