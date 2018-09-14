var oList = document.getElementById("list");
var aLi = oList.children;
var aBtn = document.getElementById("btn").children;
var aSmallBtn = document.getElementById("btnlist").children;
var oContainer = document.getElementById("container");//找到总的那个div

// 三个变量;
// 在全局表示应该让程序显示那张图片,所有的逻辑都围绕着index来做;
var index = 0; 
// 围绕index逻辑推算出的 按钮显示下标; 为什么图片和按钮不是一一对应的 ? 因为为了实现无缝轮播，多在列表结尾添加了一张图片;
var smallBtnIndex = 0;
// 自动播放定时器开关;
var timer = null;
//1.布局;
// 让list变长;
oList.style.width = aLi[0].offsetWidth * aLi.length + "px";
// 2. 手动循环;
aBtn[0].onclick = function(){
    //左侧手动循环;
    if(index == 0){
        // 到头的时候有套路;
       
        // 立即回到后添加的图片上;
        oList.style.left = -aLi[0].offsetWidth * (aLi.length - 1) + "px";
        // 因为index决定 以动画形式显示哪张图片，我们把index设置为上一张;
        index = aLi.length - 2;
    }else{
        index --;
    }
    changeItem();
}
aBtn[1].onclick = function(){
    if(index == aLi.length - 1){
        index = 1;
        oList.style.left = 0;
    }else{
        index ++;
    }
    changeItem();
}

for(var i = 0 ; i < aSmallBtn.length ; i++){
    (function(ind){//想要鼠标移入时切换下标 不知道下标  异步程序所以让他生成一个闭包 
        // 传入一个ind 不能叫index index是一个全局的
        aSmallBtn[ind].onmouseover = function(){//给每一个小点儿添加一个鼠标移入事件
            index = ind;//让index = ind
            changeItem()//他是根据index值去改变的
        }
    })(i)//传入一个i
}
//用户体验的优化;
//当用户操作的时候停止自动播放功能;
oContainer.onmouseenter = function(){//给他添加一个鼠标移入事件 因为会多次触发所以用onmouseenter
    clearInterval(timer)
}
//当用户离开了操作区的时候，重新开启定时器;
oContainer.onmouseleave = function(){//当鼠标移走的时候
    timer = setInterval(aBtn[1].onclick,3000);//再次开启定时器
}
function changeItem(){
    // oList.style.left = -aLi[0].offsetWidth * index + "px";
    // 让大长条跟着index发生位移;
    move(oList,{
        left:-aLi[0].offsetWidth * index
    })
    
    // 小点点的下标怎么算;
    if(index != aLi.length - 1){
        smallBtnIndex = index
    }else{
        smallBtnIndex = 0;
    }

    for(var i = 0 ; i < aSmallBtn.length  ; i++){
        aSmallBtn[i].className = "";
    }
    aSmallBtn[smallBtnIndex].className = "active";
}

// 开启自动播放功能;
timer = setInterval(aBtn[1].onclick,3000);