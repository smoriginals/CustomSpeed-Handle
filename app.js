const video = document.querySelector("video");
const speedBg = document.querySelector(".speed-bg");
const speedBar = document.querySelector(".speed-bar");
let isDrag = false;


function HandleSpeed(e) {
    const x = e.pageX - speedBg.offsetLeft; // Get the mouse position relative to the speedBg
    const percent = Math.min(Math.max(x / speedBg.offsetWidth, 0), 1); // Ensure percent is between 0 and 1
    const min = 0.5;
    const max = 2.5;
    const widthh = Math.round(percent * 100) + '%'; // Calculate width as a percentage
    const playbackSpeed = percent * (max - min) + min; // Calculate playback speed

    speedBar.style.width = widthh; // Update the width of the bar
    speedBar.textContent = playbackSpeed.toFixed(2) + 'x'; // Update the speed text
    video.playbackRate = playbackSpeed; // Set video playback rate
}


speedBg.addEventListener('mousedown', () => isDrag = true);
document.addEventListener('mouseup', () => isDrag = false);
speedBg.addEventListener('mousemove', (e) => {
    if (isDrag) {
        HandleSpeed(e)
    }
})