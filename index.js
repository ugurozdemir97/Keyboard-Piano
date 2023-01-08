
// ----------------------------------- Black and White Keys -------------------------------- //

var black = document.querySelectorAll(".black");
var white = document.querySelectorAll(".white");

// -------------------------------- Play Sound When Clicked --------------------------------- //

function clicked() {
    var audio = new Audio("Sounds/" + this.getAttribute("name") + ".mp3");
    audio.play();
}

for (i = 0; i < black.length; i++) {
    black[i].addEventListener("click", clicked);
}

for (i = 0; i < white.length; i++) {
    white[i].addEventListener("click", clicked);
}

// ------------------- Assign EventListeners for Keyboard to the Body ------------------------ //

document.addEventListener("keydown", function (event) {

    if (!event.repeat) {
        var pressed = String(event.key.toUpperCase());
    }

    let pressedKey = document.getElementById(pressed);
    let keyValue = pressedKey.getAttribute("name");

    if (pressedKey.classList[0] == "white") {
        pressedKey.classList.add("clicked1");
    } else {
        pressedKey.classList.add("clicked2");
    }
    
    var audio = new Audio(`Sounds/${keyValue}.mp3`);
    audio.play();

});

// ------------------- Remove Active Style When you Release the Key ------------------------ //

document.addEventListener("keyup", function (event) {

    var pressed = String(event.key.toUpperCase());

    let pressedKey = document.getElementById(pressed);

    if (pressedKey.classList[0] == "white") {
        pressedKey.classList.remove("clicked1");
    } else {
        pressedKey.classList.remove("clicked2");
    }

});