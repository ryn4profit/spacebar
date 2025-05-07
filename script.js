let count = 0;
const counterDisplay = document.getElementById("counter");

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        count++;
        counterDisplay.textContent = count;
        
        // Add a cool animation effect
        counterDisplay.style.transform = "scale(1.2)";
        setTimeout(() => {
            counterDisplay.style.transform = "scale(1)";
        }, 100);
        
        // Play a sound effect
        playSound();
    }
});

// Function to play sound
function playSound() {
    const sound = new Audio("click.mp3"); // Make sure you have a 'click.mp3' file in your project
    sound.play();
}
