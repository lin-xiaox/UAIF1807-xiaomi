$(function(){

//购物车效果
$(".shopping").mouseenter(function(){
	$(this).addClass("active")
});
$(".shopping").mouseleave(function(){
	$(this).removeClass("active")
});

//导航栏下拉效果

let nav = $(".nav");
let yijis = $(".nav li");
let erjis = $(".nav li .erji")
// console.log(nav,yijis,erjis)

yijis.mouseover(function(){
	let index = $(this).index()
	yijis.eq(index).addClass("active");
})
yijis.mouseleave(function(){
	let index = $(this).index()
    yijis.removeClass("active");
    erjis.removeClass("transition")
    // console.log(index)
    if(erjis.eq(index)){
      erjis.eq(index).addClass("transition")
    }
})

nav.mouseleave(function(){
  erjis.addClass("transition")
})


//轮播左侧选项卡效果
   	let asideBox=$(".asideBox"); 
   	let banner_left=$(".banner_left");
   	let lis=$(".banner_left ul li");
   	// console.log(asideBox,banner_left,lis)
   	
   	lis.mouseenter(function(){
   		let index = $(this).index()
   		asideBox.eq(index).css("display","block");
   	})
   	lis.mouseleave(function(){
   		let index = $(this).index()
   		asideBox.eq(index).css("display","none");
   	})
 
//轮播效果
    let lunBox = $(".banner");
    let lunimgBox = $(".banner .imgBox");
    let lunlis = $(".imgBox li");
    let dot_box = $(".dot_box");
    let lundian = $(".dot_box li");
    let prev = $(".banner .prev_box");
    let next = $(".banner .next_box");
    console.log(lundian);
    let i=1;
    function move(){
      // console.log(i);
      lunlis.removeClass("active");
      lundian.removeClass("active")
      lunlis.eq(i).addClass("active");
      lundian.eq(i).addClass("active");
      i++;
      if(i==lunlis.length){
          i=0;
      }
    }
    let prevnum = lunlis.length-1;
    function move1(){
      // console.log(prevnum);
      lunlis.removeClass("active");
      lundian.removeClass("active");
   	  lunlis.eq(prevnum).addClass("active");
      lundian.eq(prevnum).addClass("active");
      prevnum--;
      if(prevnum<0){
          prevnum=lunlis.length-1;
      }
    }
    let t = setInterval(move,1000);
    lunBox.mouseenter(function(){
      clearInterval(t);
    })
    lunBox.mouseleave(function(){
      t = setInterval(move,1000);
    })
    lundian.click(function(){
    	let index = $(this).index();
        lundian.removeClass("active");
        lunlis.removeClass("active");
        console.log(index)
        lunlis.eq(index).addClass("active");
        lundian.eq(index).addClass("active");
        i=index+1;
    })
    next.click(function(){
        move();
    })
    prev.click(function(){
        move1();
    })














})
