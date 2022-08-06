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

function highlight(e){
    let obj = e.target;
    obj.style.backgroundColor = "pink";
}
// function normal(e){
//     let obj = e.target;
//     obj.style.backgroundColor = "rgba(255,255,255,0.62)";
// }
function abc(){
    let btns = document.getElementsByTagName("button");
    for(let i=0; i<btns.length; i++){
        btns[i].onclick = highlight;
        // btns[i].onclick = normal;
    }
}
window.addEventListener("load", abc);