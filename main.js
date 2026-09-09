console.log("working");
const canvas = document.getElementById('mycanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);
// rectangle
 var c = canvas.getContext('2d');
// ***** code for creating the circles lines and rectangles *****
// // c.fillRect( 100, 100 , 300 ,300 );
// // lines
// c.beginPath();
// // add color 
// c.strokeStyle = "rgb(217, 241, 8)"
// c.moveTo( 40 , 50 );
// c.lineTo(400 ,550);
// c.lineTo(350 , 200);

// c.stroke();
// // add color 
// c.fillStyle = "rgba(107, 16, 219, 0.2)"
// // rectangle 
// c.fillRect(100,100,200,250);

// // circle
// c.beginPath();
// c.arc(420,300,20,0,Math.PI*2,false);
// c.strokeStyle = 'blue' ;
// c.stroke();
// ******* end **********
var mouse = {
    x: undefined ,
    y: undefined ,
}

window.addEventListener("mousemove",function(event){
    mouse.x = event.clientX ;
    mouse.y = event.clientY ;
    console.log(mouse);
})

function circle( x , y , dx , dy , radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;


    this.draw = function(){
        c.beginPath();
        c.arc(this.x ,this.y ,this.radius , Math.PI*2 , false );
        c.strokeStyle = "red";
        c.stroke();
        c.fill();
        
    }


    this.update = function() {
        if (this.x+this.radius >= innerWidth || this.x-this.radius <= 0){
            this.dx = -this.dx;
        }
        if (this.y+this.radius >= innerHeight || this.y-this.radius <= 0){
            this.dy = -this.dy;
        }
        this.x += this.dx ;
        this.y += this.dy ;
        
        if( (mouse.x - this.x < 50) && this.radius < 50 ) {
            this.radius += 1;
        }
        else if (this.radius > 2){
            this.radius -=1
        }
        this.draw();

        
        }

        
}
var circleArrays = [];
var radius = 20 ;
var dx = 4 ;
var dy = 4 ;
for(var i=0; i<100 ; i++){
    var x = Math.random() * (innerWidth-radius*2) + radius;
    var y = Math.random() * (innerHeight-radius*2) + radius;
    circleArrays.push(new circle( x , y , dx , dy , radius ));

}
function animation() {
    requestAnimationFrame(animation);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i = 0; i<1000 ;i++){
    circleArrays[i].update();

    }
}

animation();
