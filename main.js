var mouseevent ="empty" ;

 canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color="red";
width_of_line="2";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line");
    radius = document.getElementById("radius").value;
 mousevent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
 current_position_of_x=e.clientX-canvas.offsetLeft;
 current_position_of_y=e.clientY-canvas.offsetTop;
 if(mouseevent=="mouseDown"){

    console.log("current_position_of_x and y");
    console.log("x="+current_position_of_x+"y="+current_position_of_y);

     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=widthline;
     ctx.arc(current_position_of_x , current_position_of_y , radius , 0 , 2*Math.PI);
     ctx.stroke();
 }

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
 mouseevent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
 mouseevent="mouseLeave";
}
function ClearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}