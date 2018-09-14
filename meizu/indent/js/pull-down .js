$("#Dsf2").on("mouseenter",function(){
    $("#Dsf2 img").stop().animate().slideDown(200)

})
$("#Dsf2").mouseleave(function(){
    $("#Dsf2 img").stop().animate().slideUp(200)
})























// 加如购物车的订单

$("#removeinner").click(function(){
    console.log(1)
    $("#commodity").hide(500)
    
})















var json = {
    img : ["http://openfile.meizu.com/group1/M00/05/85/Cgbj0VtHHCSAT5pcAABcD60vGXY754.jpg","http://openfile.meizu.com/group1/M00/04/4F/Cgbj0Vrl2POAZkhYAABqzmreDl4495.jpg","http://openfile.meizu.com/group1/M00/05/52/Cgbj0Vs0m7WAa1FTAABXVBXUT-Y346.jpg","http://openfile.meizu.com/group1/M00/04/C2/Cgbj0Vsfmd2AUc3dAABT20J2AIE191.jpg"],
    tit:["魅族 6T","魅黑 15","魅蓝 S6","耳机 PL"],
    p:["全网通公开版 汝窑白 4GB+64GB","全网通公开版 象牙白 8GB+64GB","全网通公开版 尊贵黑 8GB+64GB","全网通公开版 尊贵金 8GB+64GB"],
    price:["¥ 1799.00","¥ 1699.00","¥ 1999.00","¥ 1888.00"],
    price2:["¥ 1799.00","¥ 1699.00","¥ 1999.00","¥ 1888.00"]
}
$(".number1").click(function(){
    $("#commodity").after(`<div id="commodity">
                        <a><img src="images/fangkuang.png" alt="">
                            <span></span>
                        </a>
                        <h2>${json.tit[0]}</h2>
                        <h3>${json.p[0]}</h3>
                        <h4>${json.price[0]}</h4>
                        <button class="btn1">-</button>
                        <input class="ipt1" type="text" value="1">
                        <button class="btn2">+</button>
                        <h5>限购1件</h5>
                        <h6>${json.price2[0]}</h6>
                        <h1 id="removeinner"></h1></div>`)
})
$(".number2").click(function(){
    $("#commodity").after(`<div id="commodity">
                        <a><img src="images/fangkuang.png" alt="">
                            <span></span>
                        </a>
                        <h2>${json.tit[1]}</h2>
                        <h3>${json.p[1]}</h3>
                        <h4>${json.price[1]}</h4>
                        <button class="btn1">-</button>
                        <input class="ipt1" type="text" value="1">
                        <button class="btn2">+</button>
                        <h5>限购1件</h5>
                        <h6>${json.price2[1]}</h6>
                        <h1 id="removeinner"></h1></div>`)
})
$(".number3").click(function(){
    $("#commodity").after(`<div id="commodity">
                        <a><img src="images/fangkuang.png" alt="">
                            <span></span>
                        </a>
                        <h2>${json.tit[2]}</h2>
                        <h3>${json.p[2]}</h3>
                        <h4>${json.price[2]}</h4>
                        <button class="btn1">-</button>
                        <input class="ipt1" type="text" value="1">
                        <button class="btn2">+</button>
                        <h5>限购1件</h5>
                        <h6>${json.price2[2]}</h6>
                        <h1 id="removeinner"></h1></div>`)
})
$(".number4").click(function(){
    $("#commodity").after(`<div id="commodity">
                        <a><img src="images/fangkuang.png" alt="">
                            <span></span>
                        </a>
                        <h2>${json.tit[3]}</h2>
                        <h3>${json.p[3]}</h3>
                        <h4>${json.price[3]}</h4>
                        <button class="btn1">-</button>
                        <input class="ipt1" type="text" value="1">
                        <button class="btn2">+</button>
                        <h5>限购1件</h5>
                        <h6>${json.price2[3]}</h6>
                        <h1 id="removeinner"></h1></div>`)
})





// $(function(){
//     var m_st, m_po = 0; //滚动到600像素时显示
//     $(window).scroll(
//         function () {
//             m_st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
//             if (m_st > m_po) {
//                 $('.remind').stop().slideDown(200);//classNmae : tips
//             }else{
//                 $('.remind').stop().slideUp(100);//classNmae : tips
//             }
//         })
                 
// });







function WaterFall(){}
$.extend(WaterFall.prototype,{
    init:function(){
        this.loadJson()
        .done($.proxy(function(res){
            this.rendring(res);
            this.sortElem();
        },this))
    },
    loadJson:function(){
        return $.ajax({
            url:"http://www.wookmark.com/api/json/popular",
            dataType:"jsonp"
        });
    },
    rendring:function(json){
        // console.log(json);
        var html = ``;
        for(var i = 0 ; i < json.length ; i++){
            html += `
            <div class="box" style="height:${propHeight(json[i].width,json[i].height)}px">
                <img src="${json[i].image}" alt="">
            </div> `
        }
        function propHeight(width,height){
            return 220 / width * height;
        }
        $(".container").html($(".container").html() + html);
    },
    sortElem:function(){
        var items = $(".container").children();
        // console.log(items);
        var heightArray = [];
        for(var i = 0 ; i < items.length ; i++){
            if( i < 5 ){
                // 记录第一排元素高度;
                heightArray.push(items.eq(i).height())
            }else{
                //取出最小值;
                var minHeight = Math.min.apply(false,heightArray) ;
                var minIndex = heightArray.indexOf(minHeight);
                
                heightArray[minIndex] = heightArray[minIndex] + items.eq(i).height();
                
                items.eq(i).css({
                    position:"absolute",
                    top:minHeight,
                    left:items.eq(minIndex).position().left
                })              
            }
        }

        $(".container").height(items.eq(items.length - 1) .offset().top);
    }
})

new WaterFall().init();








