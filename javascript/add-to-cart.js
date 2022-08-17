let storage = localStorage;
let btnMinus = document.getElementsByClassName("btnMinus");
let btnPlus = document.getElementsByClassName("btnPlus");
let fillAmount = document.getElementsByClassName("fill-amount");
// ================================================================

// // 為什麼把cartPanel/btnClosePanel 寫在 function init 外面, console.log(object) 會顯示null???
// let cartPanel = document.getElementById("cartPanel");
// let btnClosePanel = document.getElementById("btnClosePanel");
// console.log(cartPanel);
// console.log(btnClosePanel);
// //但最上面的四個變數都可以顯示
// console.log(btnMinus);
let cartPanel = document.getElementById("cartPanel");
let btnClosePanel = document.getElementById("btnClosePanel");
//把cartPanel/btnClosePanel 寫在 function init 內, clg可顯示

function init(){
    // console.log(cartPanel);
    // console.log(btnClosePanel);
    // console.log(btnMinus);
    // console.log(btnPlus);
    // console.log(fillAmount);
    // console.log(storage);

    if(storage['addItemList'] == null){
        storage['addItemList'] = ''    // storage.setItem('addItemList','')
    }
    // 幫每個 Add Cart 建立事件聆聽功能
    let list = document.querySelectorAll('.add-to-cart')   // list 是陣列
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click',function(e){
            let productInfo = document.querySelector(`#${e.target.id} input`).value

            addItem(e.target.id, productInfo); //寫在addItem(e.target.id, productInfo)裡面的意思???
            cartSwitch(); // 切換面板開關
            console.log(cartPanel);
            console.log(btnClosePanel);
        })
    }
}
//寫在addItem(itemId,itemValue)裡面的意思???
function addItem(itemId,itemValue){
    // alert(`${itemId}: ${itemValue}`)
    // console.log(cartPanel);
    // cartPanel.style.display = "block";
// -----------------------------------
    var oDiv = document.createElement("div");
    oDiv.className = "row-cart-item";
    oDiv.innerHTML += `<img src= "./image/pic/products/fresh-bouquet/${itemValue.split("|")[0]}" width="100" height="100">`;
    oDiv.innerHTML += `<span><div>${itemValue.split('|')[1]}</div><div>$${itemValue.split('|')[2]}元</div></span>`;

    oDiv.innerHTML +=`<div class="amount"><button type="button" class="number btnMinus">－</button><input type="text" class="fill-amount" min="1" value="1" data-option="amount"><button type="button" class="number btnPlus">＋</button></div>`;

    oDiv.innerHTML += '<div class="ctrl left btnDel" id="btnDel"><a rel="nofollow" href="javascript:;"><img src="./image/icon/icon_delete.svg" alt=""></a></div>';
    let newItem = document.getElementById('newItem')

    console.log(oDiv);
    console.log(oDiv.innerHTML);
    newItem.appendChild(oDiv);
    console.log(newItem);

// -----------------------------------
    //加減數量 
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
    // 存入 storage
    storage['addItemList'] += `${itemId}, `
    storage.setItem(itemId,itemValue)

    //删除
    var delBtn = oDiv.lastChild.getElementsByTagName("a")[0];
    delBtn.onclick = function() {
        var result = confirm("確定要刪除此商品嗎?");
        if (result) {
            newItem.removeChild(oDiv);
            // number--; //number還沒define
            getAmount();
        }
    }
}
function cartSwitch(){
    console.log(cartPanel);
    console.log(btnClosePanel);
    console.log(btnMinus);
    //打開購物車
    // cartPanel.classList.remove("closed"); //重新進main.css裡面檢查class寫法, 看能不能用transition/opacity做淡入淡出/或從右邊translate推進來
    cartPanel.style.display = "block";
    //關閉購物車
    btnClosePanel.onclick= function(){
        // cartPanel.classList.toggle("closed");
        cartPanel.style.display = "none";
    }
}
window.addEventListener("load", init);
