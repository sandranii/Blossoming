let storage = localStorage;
let btnMinus = document.getElementsByClassName("btnMinus");
let btnPlus = document.getElementsByClassName("btnPlus");
let fillAmount = document.getElementsByClassName("fill-amount");
function init(){
    if(storage['addItemList'] == null){
        storage['addItemList'] = ''    // storage.setItem('addItemList','')
    }
   
    // 幫每個 Add Cart 建立事件聆聽功能
    let list = document.querySelectorAll('.add-to-cart')   // list 是陣列

    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click',function(e){
            let productInfo = document.querySelector(`#${e.target.id} input`).value

            addItem(e.target.id, productInfo)
        })
    }

    
}
function addItem(itemId,itemValue){
    alert(`${itemId}: ${itemValue}`)

// -----------------------------------

    var oDiv = document.createElement("div");
    // var data = aData[this.index];
    oDiv.className = "row-cart-item";
    oDiv.innerHTML += `<img src= "../image/pic/products/fresh-bouquet/${itemValue.split("|")[0]}" width="100" height="100">`;
    oDiv.innerHTML += `<span><div>${itemValue.split('|')[1]}</div><div>$${itemValue.split('|')[2]}元</div></span>`;
    // oDiv.innerHTML += `<div>${itemValue.split('|')[2]}</div></span>`;
    // oDiv.innerHTML +=' <div class="item_count_i"><div class="num_count"><div class="count_d">-</div><div class="c_num">1</div><div class="count_i">+</div></div> </div>';
            // <div class="item_count_i">
            //     <div class="num_count">
            //         <div class="count_d">-</div>
            //         <div class="c_num">1</div>
            //         <div class="count_i">+</div>
            //     </div>    
            // </div>
    oDiv.innerHTML +=`<div class="amount"><button type="button" class="number btnMinus">－</button><input type="text" class="fill-amount" min="1" value="1" data-option="amount"><button type="button" class="number btnPlus">＋</button></div>`;
    
    /* // <div class="amount">
    //     <button type="button" class="number btnMinus">－</button>
    //     <input type="text" class="fill-amount" min="1" value="1" data-option="amount">
    //     <button type="button" class="number btnPlus">＋</button>
    // </div> */

    // oDiv.innerHTML += '<div class="subtotal left"><span>' + data["proPrice"] + '元</span></div>'
    oDiv.innerHTML += '<div class="ctrl left btnDel" id="btnDel"><a rel="nofollow" href="javascript:;"><img src="./image/icon/icon_delete.svg" alt=""></a></div>';
    let newItem = document.getElementById('newItem')

    console.log(oDiv);
    console.log(oDiv.innerHTML);
    newItem.appendChild(oDiv);
    console.log(newItem);

// -----------------------------------


    // let image = document.createElement('img')
    // image.src = '../image/pic/products/fresh-bouquet/' + itemValue.split('|')[0]
    // console.log(image);

    // let title = document.createElement('span')
    // title.innerText = itemValue.split('|')[1]
    // console.log(title);


    // let price = document.createElement('span')
    // price.innerText = itemValue.split('|')[2]
    // console.log(price);


    // oDiv.innerText += parseInt(image) ;
    // console.log(oDiv);

    // let newItem = document.getElementById('newItem')
    // // 先判斷此處是否已有物件，如果有要先刪除
    // // alert(newItem.childNodes.length)
    // // while(newItem.childNodes.length >= 1){
    // //     newItem.removeChild(newItem.firstChild)
    // // }

    // // 再新增物件
    // newItem.appendChild(image)
    // newItem.appendChild(title)
    // newItem.appendChild(price)
    // newItem.appendChild(oDiv)

    // let cartItems = document.getElementById('cartItems')
    // cartItems.appendChild(newItem)
    // console.log(newItem);
    // console.log(cartItems);

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

window.addEventListener("load", init);
