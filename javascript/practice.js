// window.addEventListener("load", function(){
//     // let item = document.querySelectorAll("swiper-slide");
//     // item.onclick = function(){
//     //     alert("click";)
//     // }

//     # 获取需要滚动的元素
//     const PAGE_WIDTH = 23; // 每一张图片的宽度
//     const TRANSLATION_DELAY = 1500;  // 轮播每一张图片停留的时长
//     const translatePage = () => {
//         const PAGE_WIDTH = 23; // 每一张图片的宽度
//         const TRANSLATION_DELAY = 1500;  // 轮播每一张图片停留的时长
//         const translatePage = () => {
//             const pages = document.querySelector<HTMLElement>('.carousel-contents'); // 获取需要滚动的元素
//             // 小于4张则不轮播
//             if (pages.childNodes.length < 4) return;
//             let nowPositionLeft = 0;  // 初始化当前滚动元素的marginLeft
//             const lastChild = pages.lastElementChild;
//             const firstChild = pages.firstElementChild;
//             const secondChild = pages.childNodes[1];
//             // 在 pages 容器的首尾分别添加第一个和最后两个
//             lastChild && pages.insertBefore(lastChild.cloneNode(true), firstChild);
//             firstChild && pages.appendChild(firstChild.cloneNode(true));
//             secondChild && pages.appendChild(secondChild.cloneNode(true));
//             const run = (time = TRANSLATION_DELAY) => {
//                 setTimeout(() => {
//                     # 设置marginLeft、transition来实现平滑滚动
//                     if (nowPositionLeft + ((pages.childNodes.length - 3) * PAGE_WIDTH) <= 0) {
//                         nowPositionLeft = 0;
//                         pages.style.transition = 'none';  // 去掉动画，让用户感知不到滚动回至最左端
//                         pages.style.marginLeft = `${nowPositionLeft}px`;
//                         run(0);  // 这里不设计setTime间隔，避免该状态连续出现两次
//                     } else {
//                         nowPositionLeft = nowPositionLeft - PAGE_WIDTH;
//                         pages.style.transition = 'margin-left 0.7s linear';
//                         pages.style.marginLeft = `${nowPositionLeft}px`;
//                         run();
//                     }
//                 }, time);
//             }
//             run(); // 执行滚动
//         }
//     }
    
        
    
//     作者：Amylili
//     链接：https://juejin.cn/post/6978859955461816351
//     来源：稀土掘金
//     著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。




// })



window.addEventListener("scroll", function(){
    if(document.documentElement.scrollHeight>1500){
        // alert("scroll");
        document.getElementById("go-to-top").style.display = "block";
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