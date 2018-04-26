function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0; //bring it back to sound start when played fast
    audio.play();
    key.classList.add("playing");
}

function removeTransition(e) {
    console.log(e);
    if (e.propertyName !== "transform") return;
    console.log(this);
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
