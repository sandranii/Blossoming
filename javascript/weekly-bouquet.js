// weekly-bouquet小圖換大圖
function init(){
    let imgs = document.getElementsByClassName("small");

    for(let i = 0; i<imgs.length; i++){
        imgs[i].addEventListener("click", function(e){
            document.getElementById("large").src = e.target.src;
        }, false);
    }
}

window.addEventListener("load", init, false);
