const element = document.getElementById("cursor");

document.addEventListener('mousemove', function(event){
    let x = event.clientX;
    let y = event.clientY;

    document.getElementById("cursor").style.left = x + "px";
    document.getElementById("cursor").style.top = y + "px";
});