function $id(id){
    return document.getElementById(id);
}

window.addEventListener("load", function(){
    let slider = document.querySelector(".slider");
    let curIndex=0;

    $id("btnLeft").onclick = function(){
        // clearInterval(timerId);
        curIndex--; 
        slider.style.left = -300 * curIndex+ 'px';
        if(curIndex == 0){
             $id("btnLeft").disabled = true;
        }
        $id("btnRight").disabled = false; 
        // setInterval(run,1000);       
    }
    $id("btnRight").onclick = function(){
        // clearInterval(timerId);
        if(curIndex>=4){
            $id("btnRight").disabled = true;
            // alert("curIndex >= 4");
            // clearInterval(timerId);
        }else{
            curIndex++;
            slider.style.left = -300 * curIndex+ 'px';  
        }
        $id("btnLeft").disabled = false;
        // setInterval(run,1000);       

    }

    // let timerId;
    // function run() {
    //     timerId = setInterval( function () {
    //         curIndex++;
    //         slider.style.left = -300 * curIndex + 'px';
    //         slider.style.transition = 'left 0.7s linear';
    //         if(curIndex >= 4){
    //             // alert("nooooo");
    //             clearInterval(timerId);
    //             console.log(timerId);
    //         }else{
    //             run();
    //         }
    //     }, 1000);
    //     // return;
    // }
    // run();
    // let stop=function(){
    //     clearInterval(timerId);
    // }
});
//======================slider-pics-jquery==========
$(function () {
    let divWidth = $('#sliderBoard').width()
    let imgCount = $('#content li').length

    for(let i = 0; i < imgCount; i++){
        $('#contentButton').append('<li></li>')
    }
    $('#contentButton li:first').addClass('clicked')

    $('#content li').width(divWidth)              // li 的寬
    $('#content').width(divWidth * imgCount)      // ul 的寬
console.log(divWidth);
console.log(imgCount);
console.log(divWidth * imgCount);
    let index = 0;
    let timer = setInterval(moveToNext,5000)
    $('#contentButton li').click(function(){
        clearInterval(timer)

        index = $(this).index()

        $('#content').animate({
            left: divWidth * index * -1
        })
        
        $(this).addClass('clicked')
        $('#contentButton li').not(this).removeClass('clicked')

        timer = setInterval(moveToNext,5000)
    })

    function moveToNext(){
        if(index < imgCount - 1){
            index++
        }else{
            index = 0
        }
        
        $('#content').animate({
            left: divWidth * index * -1
        })
        $(`#contentButton li:eq(${index})`).addClass('clicked')
        $('#contentButton li').not(`:eq(${index})`).removeClass('clicked')
    }
});