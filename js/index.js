var index=0;
var pwd="";
$(document).ready(function(){
  $(".num-circles").on("click",function(){
	  pwd+=$("h1",this).text();
	  pwdInput();} );
});

function go(){//定义函数 
  window.location="3D.html";//页面跳转 
} 

function pwdInput(){
    $(".code-circles div").eq(index).addClass("add-background"); 
   index+=1;
   if(index===4){
	   if(pwd==="1014"){
		   window.setTimeout(function(){go();},1000);//1秒后执行函数go   
	   }	  
	   else{
		     $(".sm-circle").each(function(index,element){
				$(element).addClass("false-add-background");
				$(element).addClass("shake");
				window.setTimeout(function(){$(element).removeClass("shake false-add-background add-background");},1000);
		     });
		   index=0;
		   pwd="";
	   }	
   }
  }