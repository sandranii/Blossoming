
window.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop>1500){
        document.getElementById("go-to-top").style.display = "block";
    }else{
        document.getElementById("go-to-top").style.display = "none";
    }

    document.getElementById("go-to-top").onclick = function(){
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    }
    // $("go-to-top").click(function() {
    //     $("html, body").animate({ scrollTop: 0 }, "slow");
    //     return false;
    //   })

})