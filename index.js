function snow () {
    var canvas1 = document.getElementById("canvas1");
    var ctx = canvas1.getContext("2d");
//gradient background
    var my_gradient = ctx.createLinearGradient(0, 0, 0, 170)
    my_gradient.addColorStop(0, "green");
    my_gradient.addColorStop(0.25, "black");
    my_gradient.addColorStop(1, "white");
    ctx.fillStyle = my_gradient;
    ctx.fillRect(0, 0, canvas1.width, canvas1.height);
//ball draw
    var radius = canvas1.height;
    ctx.translate(radius, radius);
    radius = radius * 0.55
    ball();

function ball() {
  ctx.arc(0, 0, radius, 0 , 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
 }
}

//playground button
function show() {
    alert("You have entered the hall of Destiny, congratulations!");
}
// Slide from Solo
 var images = [
  "https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2018/06/best-food-for-pug-puppies-header-1024x555.jpg",
  "https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2018/10/miniature-pug-long-1024x555.jpg"
  ];
  var num = 0;

function next() {
  var slider = document.getElementById("slider");
  num++;
  if(num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
  }

function prev() {
  var slider = document.getElementById("slider");
  num--;
  if(num < 0) {
    num = images.length-1;
  }
  slider.src = images[num];
}

//Random num
function paint () {
    
}




//Draw (On loading) function
window.onload = function() {
    
    var pos = 0; 
    var circle = document.getElementById('circle');
    var container = document.getElementById('container');
    var t = setInterval(move, 10);
  
   

   function move() {
     if(pos >= 150) {
        clearInterval(t);
     
     }
    else {
         pos += 1;
         circle.style.top = pos+"px";
         circle.style.left = pos+"px";
        }
    }
    
};
    

    