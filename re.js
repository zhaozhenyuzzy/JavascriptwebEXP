var video=document.querySelector("video");
setInterval(function(){video=document.querySelector("video");
if(video.paused==true && video.ended==false){video.play();
console.log("already recoverd.");}},6000);