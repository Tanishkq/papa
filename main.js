var last_position_of_x,last_position_of_y;
canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
Color="black";
Width_of_line="2";
var width=screen.width;
new_width=screen.width -70;
new_height=screen.height-300;
if(width < 992){
    document.getElementById("my_canvas").width=new_width;
    document.getElementById("my_canvas").height=new_height;
    document.body.style.overflow="hidden";
}
 


canvas.addEventListener("touch_start",my_touchstart);
function my_touchstart(e){

    console.log("my_touchstart");
    Color=document.getElementById("Color").value;
    Width_of_line=document.getElementById("Width_of_line").value;
    last_position_of_x= e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y= e.touches[0].clientY-canvas.offsetTop;
    
}

canvas.addEventListener("Touch_move",my_touchmove);
function my_touchmove(e){
    current_position_of_touch_x = e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY-canvas.offsetTop;

    ctx.stroketyle(Color);
    ctx.lineWidth(Width_of_line);

    console.log("last_position_of_x and y coordinates=");
    console.log("x=" + last_position_of_x +"y=" + last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);


    console.log("current_position_of_x and y coordinates=");
    console.log("x=" + current_position_of_touch_x +"y=" + current_position_of_touch_y);
    ctx.moveTo(current_position_of_touch_x,current_position_of_touch_y);

    last_position_of_x = current_position_of_touch_x;
    last_position_of_y= current_position_of_touch_y;
}

function  cleareArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}


