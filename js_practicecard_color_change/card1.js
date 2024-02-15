var rect= document.querySelector("#card");
rect.addEventListener("mousemove", function(details){
 var rec_location= rect.getBoundingClientRect();

 var inside_rect=details.clientX - rec_location.left;

 if(inside_rect < rec_location.width/2)
 {

   var redcolor= gsap.utils.mapRange(0, rec_location.width/2,255,0,inside_rect);

  gsap.to(rect,{
    backgroundColor:`rgb(${redcolor},0,0)`,
  

});
 }

 else{
    var bluecolor=gsap.utils.mapRange( rec_location.width/2,rec_location.width,0,255,inside_rect);
    gsap.to(rect,{
        backgroundColor:`rgb(0,0,${bluecolor})`,
       
    });
 }
});

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor: `white`
    });
        
    
});