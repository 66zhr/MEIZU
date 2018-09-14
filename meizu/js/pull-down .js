$("#meizu1").on("mouseenter",function(){
    $("#pull-down").stop().animate().slideDown(300)

})
$("#meizu1").mouseleave(function(){
    $("#pull-down").stop().animate().slideUp(300)
})

$("#meizu2").on("mouseenter",function(){
    $("#pull-down2").stop().animate().slideDown(300)

})
$("#meizu2").mouseleave(function(){
    $("#pull-down2").stop().animate().slideUp(300)
})

$("#meizu3").on("mouseenter",function(){
    $("#pull-down3").stop().animate().slideDown(300)

})
$("#meizu3").mouseleave(function(){
    $("#pull-down3").stop().animate().slideUp(300)
})

$("#meizu4").on("mouseenter",function(){
    $("#pull-down4").stop().animate().slideDown(300)

})
$("#meizu4").mouseleave(function(){
    $("#pull-down4").stop().animate().slideUp(300)
})

$("#meizu5").on("mouseenter",function(){
    $("#pull-down5").stop().animate().slideDown(300)

})
$("#meizu5").mouseleave(function(){
    $("#pull-down5").stop().animate().slideUp(300)
})


$("#Personal").on("mouseenter",function(){
    $("#mypull-down").stop().animate().slideDown(200)

})
$(".seekRight").mouseleave(function(){
    $("#mypull-down").stop().animate().slideUp(200)
})











function ShopCar(){}
$.extend(ShopCar.prototype,{
    init:function(){  //初始化
        this.loadJSON()
        //渲染结束后他是异步的 所以写一个done
        .done($.proxy(function(res){//调用实例化中的方法
            console.log(res);
            this.renderPag(res.data.list);
        },this))
        this.handleEvent();
    },
    loadJSON:function(){//渲染页面
        return $.ajax({
            url:"http://mce.meilishuo.com/jsonp/get/3?offset=0&frame=0&trace=0&limit=10&endId=0&pid=106888&_=1526369583128",
            dataType:"jsonp"
        })
    },
    renderPag:function(json){
        var html = "";
        for(var i = 0 ; i < 4 ; i++){
            html += `
            <li>
                <img src="${json[i].image}" alt="">
                <p class="clothesp1">${ json[i].title.length > 4 ? json[i].title.replace(/(.{10}).+/,"$1...") : json[i].title}</p>
                <h3 class="clothesp2">${json[i].price}¥</h3>
                <button class="addCar" data-id= "${i}" >加入购物车</button>
                <span class="blueblocak"></span>
            </li> `                        
        }
        $(".hot-salelist1 .hot-salelistin1 ul").html(html);
    },
    handleEvent:function(){
        $(".hot-salelist1 .hot-salelistin1 ul").on("click",".addCar",$.proxy(this.addCar,this))
        $("#Personal2 .laji").on("click",$.proxy(this.removeShopCar,this))
    },
    addCar:function(event){
        var evt = event || widnow.event;
        var target = evt.target || evt.srcElement;
        // console.log(1);
        // console.log($(target).attr("data-id"));
        var goodsId = $(target).attr("data-id");
        // shopCar ;
        if($.cookie("shopCar") === undefined){
            //创建结构;
            $.cookie("shopCar",`[{"id":${goodsId},"num":"1"}]`)
        }else{
            //判断 id 是否存在;
            var cookieArray = JSON.parse($.cookie("shopCar"))
            // console.log(cookieArray)

            var hasSame = false;
            for(var i = 0 ; i < cookieArray.length ; i++){
                if(cookieArray[i].id == goodsId){
                    //商品存在;
                    cookieArray[i].num ++;
                    hasSame = true;
                }       
            }
            //商品不存在 那么创建新的商品放入 cookie之中;
            if(hasSame === false){
                var itemObject = {
                    id:goodsId,
                    num:1
                }
                cookieArray.push(itemObject)
            }
            $.cookie("shopCar",JSON.stringify(cookieArray));
            console.log(cookieArray)
        }
               // console.log($.cookie("shopCar"))
               this.showNum();
            },
            showNum:function(){
                if($.cookie("shopCar") == undefined){
                    $("#Personal2 span").html(0);
                    return;
                }
                var cookieArray = JSON.parse($.cookie("shopCar"));
                var sum = 0;
                for(var i = 0 ; i < cookieArray.length ; i++){
                    sum += Number(cookieArray[i].num);
                }
                // console.log(sum)
                $("#Personal2 span").html(sum);
            },
            removeShopCar:function(){
                $.removeCookie("shopCar");
                this.showNum()
            }
        })

new ShopCar().init();






$(".removenox").click(function(){
    console.log(1)
    $(".nox").slideUp(500)
})













//返回顶部
$(window).scroll(function(){
    if ($(window).scrollTop()>1000){
        $("#fixation").fadeIn(300);
    }
    else
    {
        $("#fixation").fadeOut(100);
    }
})
$(".s3").click(function(){
    if ($('html').scrollTop()) {
        $('html').animate({ scrollTop: 0 }, 500);
    }
    $('body').animate({ scrollTop: 0 }, 500);           
   });      

//返回顶部结束













//点击导航,页面滑动到相应位置
$(".LoutiNav li").click(function(){
    $(this).addClass("hover").siblings().removeClass("hover");
    var index = $(this).index();
    $("html,body").stop().animate({scrollTop: index*600 + 1000 }, 1000);
})
//窗口的滚动事件
$(window).scroll(function(){
// console.log($(this).scrollTop());//打印滑动的高度值
//当滚动距离大于等于1000的时候,出现左侧的楼梯导航
if($(this).scrollTop() >= 540){
    $(".LoutiNav").show();//大于等于1000让侧栏显示
}else{
    $(".LoutiNav").hide();//小于的话隐藏
}
//根据滚动的距离,计算当前在哪个楼层,更新导航
var index = Math.floor(($(this).scrollTop() - 540)/600);//鼠标划的高度减1000除以每块的高度向下取整 把它当做下标
console.log(index);
$(".LoutiNav li").eq(index).addClass("hover").siblings().removeClass("hover");
})
