let storage = localStorage;
let btnMinus = document.getElementsByClassName("btnMinus");
let btnPlus = document.getElementsByClassName("btnPlus");
let fillAmount = document.getElementsByClassName("fill-amount");
// let cartPanel = document.getElementById("cartPanel");
// let btnClosePanel = document.getElementById("btnClosePanel");
let cartPanel = document.getElementById("cartPanel");

function init(){
//     let cartPanel = document.getElementById("cartPanel");
// let btnClosePanel = document.getElementById("btnClosePanel");
    console.log(cartPanel);
    console.log(btnClosePanel);
    console.log(btnPlus);
    if(storage['addItemList'] == null){
        storage['addItemList'] = ''    // storage.setItem('addItemList','')
    }
    // 幫每個 Add Cart 建立事件聆聽功能
    let list = document.querySelectorAll('.add-to-cart')   // list 是陣列
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click',function(e){
            let productInfo = document.querySelector(`#${e.target.id} input`).value

            addItem(e.target.id, productInfo);
            // cartSwitch();
        })
    }
}
function addItem(itemId,itemValue){
    // alert(`${itemId}: ${itemValue}`)
    // console.log(cartPanel);
    // cartPanel.style.display = "block";
// -----------------------------------
    var oDiv = document.createElement("div");
    oDiv.className = "row-cart-item";
    oDiv.innerHTML += `<img src= "../image/pic/products/fresh-bouquet/${itemValue.split("|")[0]}" width="100" height="100">`;
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
            number--;
            getAmount();
        }
    }
}
// function cartSwitch(itemId,itemValue){
//     console.log(cartPanel);
//     //打開購物車
//     // cartPanel.classList.remove("closed");
//     cartPanel.style.display = "block";
//     //關閉購物車
//     btnClosePanel.onclick= function(){
//         cartPanel.classList.toggle("closed");
//     }
// }
window.addEventListener("load", init);
