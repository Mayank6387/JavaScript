let vari=document.querySelector("#center");

vari.addEventListener("mousemove",function(details){
    let rectlocat=vari.getBoundingClientRect();
    let insiderect=details.clientX-rectlocat.left;
   if(insiderect<rectlocat.width/2){
    var redcol=gsap.utils.mapRange(0,rectlocat.width/2,300,0,insiderect);
   gsap.to(vari,{
    backgroundColor:`rgb(${redcol},0,0)`,
    ease:Power4,
   });
}
   else{
    var bluecol=gsap.utils.mapRange(rectlocat.width/2,rectlocat.width,0,300,insiderect);
   gsap.to(vari,{
    backgroundColor:`rgb(0,0,${bluecol})`,
    ease:Power4,
   });
   }
})

vari.addEventListener("mouseleave",function(){
    gsap.to(vari,{
        backgroundColor:"white",
    });
})


