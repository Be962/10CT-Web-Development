const music = document.getElementById("music") // No volume attribute is naturally in a browser, so it has to be done in JS. I could have done it in the HTMl, but it feels more organised with its own file, even if its small. Found on stack overflow, and adapted a bit.
const muteButton = document.getElementById("musicButton")

music.volume = 0.2
music.muted = true;

musicButton.addEventListener("click", () => {
    music.muted = !music.muted;

    if (music.muted) {
        muteButton.textContent = "🔇"
    }
    else {
        muteButton.textContent = "🔉"
        music.play();
    }
})