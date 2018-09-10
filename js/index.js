window.onload = function(){

//导航栏下拉效果

let nav = document.querySelector(".nav");
let yijis = document.querySelectorAll(".nav li");
let erjis = document.querySelectorAll(".nav li .erji")
console.log(nav,yijis,erjis)
yijis.forEach((v,i)=>{
  v.onmouseover = function(){
    this.classList.add("active");
  }
  v.onmouseleave = function(){
    this.classList.remove("active");
    erjis.forEach((item,index)=>{
      item.classList.remove("transition")
    })
    if(erjis[i]){
      erjis[i].classList.add("transition")
    }
  }
})
nav.onmouseleave = function(){
  erjis.forEach((item,index)=>{
    item.classList.add("transition")
  })
}












//购物车下拉效果
    let shop=document.getElementsByClassName("shopping")[0]; 
    let shopa=document.getElementById("shopa"); 
    let shopbox=document.getElementsByClassName("shopbox")[0]; 
    // console.log(shop,shopbox,shopa)

   	shop.onmouseenter=function(){
   		shopa.style.background="#fff";
   		shopa.style.color="#ff6700";
   		shopbox.style.height="98px";
   		shopbox.style.boxShadow="0 2px 20px 2px rgba(0,0,0,0.2)"
   	}
	  shop.onmouseleave=function(){
		shopa.style.color="#b0b0b0";
		shopa.style.background="#424242";
   		shopbox.style.height="0";
   		shopbox.style.boxShadow="none"
   	}


//轮播左侧选项卡效果
   	let asideBox=document.getElementsByClassName("asideBox"); 
   	let banner_left=document.querySelector(".banner_left");
   	let lis=banner_left.getElementsByTagName("li");
   	// console.log(banner_left,lis)
   	for(let i=0;i<lis.length;i++){
   		lis[i].onmouseenter=function(){
   			asideBox[i].style.display="block";
   		}
   		lis[i].onmouseleave=function(){
   			asideBox[i].style.display="none";
   		}
   	}

//轮播效果
    let lunBox = document.getElementsByClassName("banner")[0];
    let lunimgBox = lunBox.getElementsByClassName("imgBox")[0];
    let lunlis = lunimgBox.getElementsByTagName("li");
    let dot_box = document.getElementsByClassName("dot_box")[0];
    let lundian = dot_box.getElementsByTagName("a");
    let prev = lunBox.getElementsByClassName("prev_box")[0];
    let next = lunBox.getElementsByClassName("next_box")[0];
    // console.log(lunBox,lunlis,dot_box,lundian,prev,next);
    let i=1;
    function move(){
      // console.log(i);
      for(let j=0;j<lunlis.length;j++){
        lunlis[j].className="";
        lundian[j].className="";
      }
      lunlis[i].className="active";
      lundian[i].className="active";
      i++;
      if(i==lunlis.length){
          i=0;
      }
    }
    let prevnum = lunlis.length-1;
    function move1(){
      // console.log(prevnum);
      for(let j=0;j<lunlis.length;j++){
        lunlis[j].className="";
        lundian[j].className="";
      }
      lunlis[prevnum].className="active";
      lundian[prevnum].className="active";
      prevnum--;
      if(prevnum<0){
          prevnum=lunlis.length-1;
      }
    }
    let t = setInterval(move,1000);
    lunBox.onmouseenter=function(){
      clearInterval(t);
    }
    lunBox.onmouseleave=function(){
      t = setInterval(move,1000);
    }

    for(let num=0;num<lundian.length;num++){
      lundian[num].onclick=function(){
        for(let j=0;j<lundian.length;j++){
          lundian[j].className="";
          lunlis[j].className="";
        }
        lunlis[num].className="active";
        lundian[num].className="active";
        i=num+1;
      }
    }
    next.onclick = function(){
        move();
    }
    prev.onclick = function(){
        move1();
    }


/////////////////////////////////////////////家电选项卡效果//////////////////////////////////////////////
function xuanka(jddians,jdtops){
  jdtops.forEach((item,index)=>{
    item.onmouseenter = function(){
      for(let i=0;i<jdtops.length;i++){
        jdtops[i].classList.remove("active")
        jddians[i].classList.remove("active")
      }
      item.classList.add("active");
      jddians[index].classList.add("active");
    }
  })
}
let jddians = document.querySelectorAll(".jiadian .main_Box .mBox_right ul")
let jdtops = document.querySelectorAll(".jiadian .toptop .top_right li")
xuanka(jddians,jdtops);
let zndians = document.querySelectorAll(".zhineng .main_Box .mBox_right ul")
let zntops = document.querySelectorAll(".zhineng .toptop .top_right li")
console.log(zndians,zntops)
xuanka(zndians,zntops);
// console.log(jddians,jdtops)
// jdtops.forEach((item,index)=>{
//   item.onmouseenter = function(){
//     for(let i=0;i<jdtops.length;i++){
//       jdtops[i].classList.remove("active")
//       jddians[i].classList.remove("active")
//     }
//     item.classList.add("active");
//     jddians[index].classList.add("active");
//   }
// })



//内容的轮播效果

let content = document.querySelector(".content");
let wrapper_ul1 = document.querySelector(".cmbox1 .cb_wrapper .wrapper_ul2");
let condian = document.querySelectorAll(".cmbox1 .dianlist li span")
let cprev1 = document.querySelector(".cmbox1 .listprev")
let cnext1 = document.querySelector(".cmbox1 .listnext")
let width = wrapper_ul1.offsetWidth;
let cishu = 3;
// console.log(content,wrapper_ul1,width,condian,cprev1,cnext1);
let num = 0;
let flag;
cnext1.onclick = function(){
  if(flag==false){
    return;
  }
  num++;
  if(num>=2){
    num=2;
  }
  flag=false;
  animate(wrapper_ul1,{marginLeft:-(width/cishu)*num},function(){
    flag=true;
  })
  for(let i=0;i<condian.length;i++){
    condian[i].classList.remove("active");
  }
  condian[num].classList.add("active");
}
cprev1.onclick = function(){
  if(flag==false){
    return;
  }
  num--;
  if(num<=0){
    num=0;
  }
  flag=false;
  animate(wrapper_ul1,{marginLeft:-(width/cishu)*num},function(){
    flag=true;
  })
 for(let i=0;i<condian.length;i++){
    condian[i].classList.remove("active");
  }
  condian[num].classList.add("active");
}


condian.forEach((item,index)=>{
  item.onclick = function(){
    for(let i=0;i<condian.length;i++){
      condian[i].classList.remove("active")
    }
    item.classList.add("active");
    animate(wrapper_ul1,{marginLeft:-(width/cishu)*index},function(){
      flag=true;
    })
  }
})


//小米闪购

let sprev = document.querySelector(".topright .prev")
let snext = document.querySelector(".topright .next")
let sgbox = document.querySelector(".fbox .boxright ul")
let swidth = sgbox.offsetWidth/9;
let scishu = 0;
// console.log(sprev,snext,sgbox,swidth)
snext.onclick = function(){
  scishu++;
  if (scishu==1) {
    sgbox.style.transform = "translateX("+(-swidth*4+50)+"px)";
  }else if(scishu>=2){
     scishu=2;
    sgbox.style.transform = "translateX("+(-swidth*5+50)+"px)";
  }
}
sprev.onclick = function(){
  scishu--;
  if (scishu==1) {
    sgbox.style.transform = "translateX("+(-swidth*4+50)+"px)";
  }else if(scishu<=0){
    scishu=0;
    sgbox.style.transform = "translateX("+(-swidth*0)+"px)";
  }
}

///////////////////////////////////////////// 为你推荐 /////////////////////////////////////////////////
let rebox = document.querySelector(".rbox_main");
let rewidth = parseInt(getComputedStyle(rebox,null).width)/3;
let reprev = document.querySelector(".recommend .prev");
let renext = document.querySelector(".recommend .next");
console.log(rebox,rewidth,reprev,renext)
let recishu = 0;
renext.onclick = function(){
  recishu++;
  if(recishu>=2){
    recishu=2;
  }
  rebox.style.transform = "translateX("+(-rewidth*recishu)+"px)";
}
reprev.onclick = function(){
  recishu--;
  if(recishu<=0){
    recishu=0;
  }
  rebox.style.transform = "translateX("+(-rewidth*recishu)+"px)";
}


















}
