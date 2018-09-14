$("#Meizu-mall").on("mouseenter",function(){
    $("#pull-down").stop().animate().slideDown(300)

})
$("#Meizu-mall").mouseleave(function(){
    $("#pull-down").stop().animate().slideUp(300)
})

$("#Meizu-cellphone").on("mouseenter",function(){
    $("#pull-down2").stop().animate().slideDown(300)

})
$("#Meizu-cellphone").mouseleave(function(){
    $("#pull-down2").stop().animate().slideUp(300)
})

$("#mobile-phone").on("mouseenter",function(){
    $("#pull-down3").stop().animate().slideDown(300)

})
$("#mobile-phone").mouseleave(function(){
    $("#pull-down3").stop().animate().slideUp(300)
})

$("#digital").on("mouseenter",function(){
    $("#pull-down4").stop().animate().slideDown(300)

})
$("#digital").mouseleave(function(){
    $("#pull-down4").stop().animate().slideUp(300)
})

$("#entertainment").on("mouseenter",function(){
    $("#pull-down5").stop().animate().slideDown(300)

})
$("#entertainment").mouseleave(function(){
    $("#pull-down5").stop().animate().slideUp(300)
})

$("#home-life").on("mouseenter",function(){
    $("#pull-down6").stop().animate().slideDown(300)

})
$("#home-life").mouseleave(function(){
    $("#pull-down6").stop().animate().slideUp(300)
})


$("#Personal").on("mouseenter",function(){
    $("#mypull-down").stop().animate().slideDown(200)

})
$("#seekRight").mouseleave(function(){
    $("#mypull-down").stop().animate().slideUp(200)
})








// $("#introduce1").on("click",function(){
//     $("#parameter-in").stop().slideToggle(300)
// })

// $("#introduce2").on("click",function(){
//     $("#commodity-details-in").stop().slideToggle(300)
//     $("#parameter-in").stop().slideToggle(300)
// })


// $("#introduce3").on("click",function(){
//     $("#issue-in").stop().slideToggle(300)
//     $("#commodity-details-in").hide(300)
//     $("#parameter-in").hide(300)
// })




$("ol>li:first").show().siblings().hide();
$("ul>li:first").addClass("hover");
$("ul>li").mouseenter(function(){
    $(this).addClass("hover").siblings().removeClass("hover");
    $("ol>li").eq($(this).index()).show().siblings().hide();
})









// 点击按钮切换样式
// window.onload = function(){
//     var arr = document.getElementsById('1');
//     for(var i = 0;i<arr.length;i++){
//         arr[i].onclick = function(){	
//             //this是当前激活的按钮，在这里可以写对应的操作	
//             if(this.className == 'btn1'){
//                 this.className = 'btn2';
//                 var name = this.id;
//                 var btn = document.getElementsByClassName('btn2');
//                 for(var j=0;j<btn.length;j++){
//                     if(btn[j].id!=name){
//                         btn[j].className = 'btn1';
//                     }
//                 }	
//             }
//          } 
//      }
//     }












$(function(){
    var m_st, m_po = 156; //滚动到600像素时显示
    $(window).scroll(
        function () {
            m_st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
            if (m_st > m_po) {
                $('.Suction-top').stop().slideDown(200);//classNmae : tips
            }else{
                $('.Suction-top').stop().slideUp(100);//classNmae : tips
            }
        })
                 
});

$(function(){
    var m_st, m_po = 1000; //滚动到600像素时显示
    $(window).scroll(
        function () {
            m_st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
            if (m_st > m_po) {
                $('#introducecopy').stop().slideDown(50);//classNmae : tips
            }else{
                $('#introducecopy').stop().slideUp(50);//classNmae : tips
            }
        })
                 
});

$(function(){
    var m_st, m_po = 800; //滚动到600像素时显示
    $(window).scroll(
        function () {
            m_st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
            if (m_st > m_po) {
                $('.Suction-topin button').stop().slideDown(50);//classNmae : tips
            }else{
                $('.Suction-topin button').stop().slideUp(50);//classNmae : tips
            }
        })
                 
});








// 吸顶菜单
$(function(){
    var offsetTop = $(".Suction-top").offset().top
    $(document).scroll(function(){
        if($(document).scrollTop() >= offsetTop){
            if($(".Suction-top").hasClass("details")) return; 
            $(".Suction-top").addClass("details");
        }else{
            if(!$(".Suction-top").hasClass("details")) return; 
            $(".Suction-top").removeClass("details");
        }
    })
})
// 吸顶菜单结束




// //放大镜 袁老师的
// $id("small").onmouseover = function(){
//     $id("mask").style.display = "block";
//     $id("big").style.display = "block";	
// }
// $id("small").onmouseout = function(){
//     $id("mask").style.display = "none";
//     $id("big").style.display = "none";
// }
// var list = $id("middle").children;
// for(let i = 0;i<list.length;i++){
//     list[i].index = i;
//     list[i].onmouseover=function(){
//         if( list[i].index==0 ){
//             $id("smallImg").src="images/1m.png";
//             $id("bigImg").src="images/1b.png";
//             $id("mask").style.background="url(images/1m.png)";
//         }else if( list[i].index==1 ){
//             $id("smallImg").src="images/2m.png";
//             $id("bigImg").src="images/2b.png";
//             $id("mask").style.background="url(images/2m.png)";	
//         }else if( list[i].index==2 ){
//             $id("smallImg").src="images/3m.png";
//             $id("bigImg").src="images/3b.png";
//             $id("mask").style.background="url(images/3m.png)";	
//         }else{
//             $id("smallImg").src="images/4m.png";
//             $id("bigImg").src="images/4b.png";
//             $id("mask").style.background="url(images/4m.png)";	
//         }
//     }	
// }	
// $id("small").onmousemove = function(e){
//     var e = e || event;
//     var x = e.pageX - $id("mask").offsetWidth/2 - $id("box").offsetLeft;
//     var y = e.pageY - $id("mask").offsetHeight/2 - $id("box").offsetTop;
    
//     var maxL = $id("box").offsetWidth - $id("mask").offsetWidth;
//     var maxT = $id("box").offsetHeight - $id("mask").offsetHeight;
    
//     x < 0 ? x = 0 : ( x > maxL ? x=maxL : x );
//     y < 0 ? y = 0 : ( y > maxT ? y=maxT : y );
    
//     var bigImgLeft = x*($id("bigImg").offsetWidth-$id("big").offsetWidth)/($id("smallImg").offsetWidth-$id("mask").offsetWidth);
//     var bigImgTop = y*($id("bigImg").offsetHeight-$id("big").offsetHeight)/($id("smallImg").offsetHeight-$id("mask").offsetHeight);
    
//     $id("mask").style.left = x + "px";
//     $id("mask").style.top = y + "px";
    
//     $id("bigImg").style.left = -bigImgLeft + "px";		
//     $id("bigImg").style.top = -bigImgTop + "px";	
    
//     console.log(($id("smallImg").offsetWidth-$id("mask").offsetWidth))
//     $id("mask").style.left = x + "px";
//     $id("mask").style.top = y + "px";
//     $id("mask").style.backgroundPosition = -x + "px " + -y + "px";
// }









//放大镜选项卡
var oLi = document.querySelectorAll("#middle a");
// var oLi2 = document.querySelectorAll("#box li");
for( var i = 0; i < oLi.length; i++ ){
//    oLi[i].index = i;//为四个标题对应添加属性  用来存储每一个标题在页面中的下标
   oLi[i].onclick = function(){
       for( var j = 0 ; j < oLi.length ; j++ ){
           oLi[j].className = "";
        //    oLi2[j].style.display = "none"
       }
       this.className = "on"
    //    oLi2[this.index].style.display = "block"        
   }
}















// 放大镜
function Magnifier(){
    
    }
    $.extend(Magnifier.prototype,{
        init:function(){
            // 元素选择
            this.smallBox = $(".small");
            this.bigBox = $(".big");
            this.grayBox = this.smallBox.find(".grayBox");
            this.bigImg = this.bigBox.find("img");
            this.smallImg = this.smallBox.find("img");
            // 计算比例;
            this.widthProp = this.bigBox.width() / this.grayBox.width();
            this.heightProp = this.bigBox.height() / this.grayBox.height();
            // 计算比例 --end;
            // 缩放图片;
            this.bigImg.width(this.widthProp * this.smallBox.width()) 
            this.bigImg.height(this.heightProp * this.smallBox.height()) 

            console.log(this.widthProp,this.heightProp)

            this.handleEvent();
        },
        handleEvent:function(){
            this.smallBox.on("mouseenter",$.proxy(this.overEvent,this))
            this.smallBox.on("mouseleave",$.proxy(this.outEvent,this))
            this.smallBox.on("mousemove",$.proxy(this.moveEvent,this))
        },
        overEvent:function(){
            // console.log("鼠标移入");
            this.grayBox.fadeIn();
            this.bigBox.fadeIn();
            this.smallImg.animate({
                opacity:0.3
            })

        },
        outEvent:function(){
            // console.log("鼠标移出");
            this.grayBox.fadeOut();
            this.bigBox.fadeOut();
            this.smallImg.animate({
                opacity:1
            })
        },
        moveEvent:function(event){
            // console.log("鼠标移动");
            var evt = event || window.event;
            var nLeft = evt.offsetX;
            var nTop = evt.offsetY;

            this.posElem({
                left:nLeft - this.grayBox.width() / 2,
                top:nTop- this.grayBox.height() / 2
            })
        },
        posElem:function(pos){
            // 给定位置定位元素
            // console.log(pos);
            // 边界检测;
            var maxLeft = this.smallBox.width() - this.grayBox.width();
            pos.left = pos.left <= 0 ? 0 : pos.left;
            pos.left = pos.left >= maxLeft  ? maxLeft : pos.left;

            var maxTop = this.smallBox.height() - this.grayBox.height();
            pos.top = pos.top <= 0 ? 0 : pos.top;
            pos.top = pos.top >= maxTop ? maxTop : pos.top;
            // 边界检测 -- end;

            this.grayBox.css({
                left:pos.left,
                top:pos.top
            });
            //运动小灰框背景图;
            this.grayBox.css({
                backgroundPosition:-pos.left+"px "+ -pos.top + "px"
            })
            
            // 小图总路程;
            var totalleftRoad = this.smallBox.width() - this.grayBox.width();
            var totaltopRoad = this.smallBox.height() - this.grayBox.height();
            // 行进路程的比例;
            var leftProp =  parseInt(pos.left / totalleftRoad * 100 ) / 100;
            var topProp =  parseInt( pos.top / totaltopRoad * 100) / 100 ;

            //大图总路程;
            var totalLeft = this.bigImg.width() - this.bigBox.width();
            var totalTop = this.bigImg.height() - this.bigBox.height()
            
            // console.log(leftProp,topProp);

            this.bigImg.css({
                left:-totalLeft * leftProp,
                top:-totalTop * topProp
            })

        }   
    })
    
    var magnifier = new Magnifier();
    magnifier.init();   










    // 点击加入购物车显示的东西
    function Pop(content){
        if(Pop.elem == undefined){
            Pop.elem = $("<div class='wrap2'><div class='content'>"+"<a class='abc' a href='../verifyLogin/verifyLogin.html'>"+content+"</a>"+"</div></div>");
            $("body").append(Pop.elem);
            $("body").on("click",".wrap2",function(){
                $(this).slideUp(300);
            })
        }else{
            return Pop.elem.toggle();
        }
    }

    $("#shopping-cart").on("click",function(){
        new Pop("去登录?");
    })