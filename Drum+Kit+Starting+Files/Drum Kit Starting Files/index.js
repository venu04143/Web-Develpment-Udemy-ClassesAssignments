for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;

        var soundFile;
        switch (buttonInnerHtml) {
            case "w":
                soundFile = "sounds/tom-1.mp3";
                break;
            case "a":
                soundFile = "sounds/tom-2.mp3";
                break;
            case "s": 
                soundFile = "sounds/tom-3.mp3";
                break;
            case "d":
                soundFile = "sounds/tom-4.mp3";
                break;
            case "j":
                soundFile = "sounds/snare.mp3";
                break;
            case "k":
                soundFile = "sounds/crash.mp3";
                break;
            case "l":
                soundFile = "sounds/kick-bass.mp3";
                break;
            default:
                console.log("Invalid key: " + buttonInnerHtml);
                return;
        }

        var audio = new Audio(soundFile);
        audio.play();
    });
}


