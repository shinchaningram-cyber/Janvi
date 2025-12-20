// SWIPE & PAGE SWITCH
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const swipeBtn = document.getElementById("swipeBtn");

swipeBtn.onclick = () => {
    page1.classList.remove("active");
    page2.classList.add("active");
    startTyping();
};

// TYPING EFFECT
const messageText = "Happy New Year Ritika !! 🎉\n2025 became the best year of my life because I had the chance to meet someone as amazing, cute, and beautiful as you. I truly feel lucky to have crossed paths with you. Your presence has added so much joy and positivity to my life, and I’m grateful for all the memories we’ve made.\nI hope this year brings you all the happiness, success, and peace you deserve. May your dreams take flight, your heart be filled with all the good things, and may you keep shining as brightly as you always do. ✨\nWishing you a fantastic 2026 ahead! 🌟💫, and may every moment be as sweet and wonderful as you are.\nCheers to new beginnings, new experiences, and always having each other’s back, no matter what.💖😊";
const typedSpan = document.getElementById("typed");
let index = 0;

function startTyping() {
    if (index < messageText.length) {
        typedSpan.textContent += messageText.charAt(index);
        index++;
        setTimeout(startTyping, 80);
    }
}

// MUSIC CONTROLS
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.textContent = "🔊";
    } else {
        bgMusic.pause();
        musicBtn.textContent = "🔈";
    }
};
