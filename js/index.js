window.onload = function(){
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
   	// console.log(banner_left)
   	let lis=banner_left.getElementsByTagName("li");
   	// console.log(lis)
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
    console.log(lunBox,lunlis,dot_box,lundian,prev,next);



    let i=1;
    function move(){
      console.log(i);
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
      console.log(prevnum);
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










}
