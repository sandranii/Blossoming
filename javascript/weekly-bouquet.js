let btnMinus = document.getElementsByClassName("btnMinus");
let btnPlus = document.getElementsByClassName("btnPlus");
let fillAmount = document.getElementsByClassName("fill-amount");

window.addEventListener("load",function(){
    // weekly-bouquet小圖換大圖
    let imgs = document.getElementsByClassName("small");
    for(let i = 0; i<imgs.length; i++){
        imgs[i].addEventListener("click", function(e){
            document.getElementById("large").src = e.target.src;
        }, false);
    } 
    //加減數量 --價錢要變動?
    for(let i=0; i<btnMinus.length;i++){
        btnMinus[i].onclick = function(){
            if(fillAmount[i].value>1){
                fillAmount[i].value = parseInt(fillAmount[i].value) - 1;
            }
        }
        btnPlus[i].onclick = function(){
            fillAmount[i].value = parseInt(fillAmount[i].value) + 1;
        }
    }
});

let select = {};//物件
myStorage = window.localStorage;
// jQUERY
$(document).ready(function(){
// 選項選取完後, 要變白色
// 同行只能選擇一個選項, 其餘都要remove class   
    $('.btn').click(function(e){
        $(this).toggleClass('chosen').siblings().removeClass('chosen');
        const option = e.target.dataset.option;
        const value = e.target.dataset.value;
        select[option] = value;
        console.log(select);
        localStorage.setItem(option, value);
        // localStorage.setItem("cart", JSON.stringify(select));
      });
 //開始日選取完後, 要變白色 
    $('#startDate').blur(function(e){
        console.log(startDate.value);
        if(startDate.value != ""){
            $(this).addClass('chosen');
            const option = e.target.dataset.option;
            select[option] = startDate.value;
            console.log(select);
            localStorage.setItem(option, startDate.value);
            // localStorage.setItem("cart", JSON.stringify(select));
        }else{
            $(this).removeClass('chosen');
        }
    })
    
    $('#submit').click(function(e){
        let i = 0;
        select["amount"] = fillAmount[i].value;
        console.log(select);
        // e.stopPropagation();
        // return;
        // localStorage.setItem("cart", JSON.stringify(select));
        localStorage.setItem("amount", fillAmount[i].value);
    })
    let size = localStorage.getItem('size');
    let style = localStorage.getItem('style');
    let theme = localStorage.getItem('theme');
    let delivery = localStorage.getItem('delivery');
    let date = localStorage.getItem('startDate');
    let amount = localStorage.getItem('amount');

    $('#size').text(size);
    $('#style').text(style);
    $('#theme').text(theme);
    $('#delivery').text(delivery);
    $('#date').text(date);
    $('#amount').text(amount);
    console.log(amount);
    
});
//每行都要選取後 才能送出 不然要alert
//取每個chosen的值出來 出現在購物車頁面

