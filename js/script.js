function trail(event) {
    x = event.screenX; 
    y = event.screenY; //Mouse locations
    var div = document.createElement("div"); //Dynamically generating a div
    div.style.background = "url(images/background.jpg) no-repeat fixed"; //Change the image in URL along with background in css
    div.style.backgroundSize="cover";
    div.id = "fol";
    div.style.height = "70px";
    div.style.width = "70px";
    div.style.position = "absolute";

    div.style.borderRadius = "50%";
    div.style.left = x - 50;
    div.style.top = y - 150;
    document.body.appendChild(div);
    var e = document.getElementById("fol");
    e.style.animation = "zoom 800ms ease-in-out 1 forwards";
    document.getElementById("fol").style.left = (x - 50) + "px";
    document.getElementById("fol").style.top = (y - 150) + "px"; //Offset position for the div
    window.setTimeout(function(){
        div.style.opacity
    },300);
    window.setTimeout(function () {
        div.parentNode.removeChild(div);
    }, 800); //Removing each div after a duration of 300ms. Change as per requirement



}