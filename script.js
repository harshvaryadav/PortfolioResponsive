function fun()
{
   var navbar=document.getElementById("Nav"); 
   var bar=document.getElementById("b");
   if(navbar.style.display=="block")
   {
      navbar.style.display="none"; 
   }
   else
   {
      navbar.style.display="block";
   }
}
function func()
{
   var bar=document.getElementById("b");
   bar.classList.toggle("fa-bars");   
   bar.classList.toggle("fa-close"); 
}
var i=0;
function change() 
{
    var Img=document.getElementById("img");
    var arr=["https://www.cellsoftware.co.uk/wp-content/uploads/2017/04/Top-6-Software-Development-Methodologies.jpg","https://wallpaperaccess.com/full/1428490.jpg","https://bloximages.chicago2.vip.townnews.com/missoulian.com/content/tncms/assets/v3/editorial/2/8b/28b07ad5-2396-50e2-b286-7d1844ae756b/5b1af2c7f0751.image.jpg","https://www.herzing.edu/sites/default/files/styles/fp_960_640/public/2020-09/how-to-become-software-engineer.jpg.webp?itok=3WVOMgAJ","https://thumbs.dreamstime.com/b/vector-illustration-circuit-board-computer-background-hi-tech-digital-technology-engineering-digital-telecom-technology-180968471.jpg"];
    Img.src=arr[i]; 
    i=i+1;
    i=i%5;
    setTimeout(change,2000);
}
window.onclick=function(event){
   var navbar=document.getElementById("Nav"); 
   var nav=document.getElementById("b"); 
   if(event.target!=navbar&&event.target!=nav)
   {
      navbar.style.display="none";
   }    
}