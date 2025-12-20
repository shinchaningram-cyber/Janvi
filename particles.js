const icons = ["🎉","✨","💫","🎇","❤️"];
const container = document.getElementById("particles-container");

function spawnParticle() {
    const div = document.createElement("div");
    div.innerText = icons[Math.floor(Math.random() * icons.length)];
    div.style.position = "absolute";
    div.style.left = Math.random() * 100 + "vw";
    div.style.fontSize = (Math.random() * 30 + 20) + "px";
    div.style.opacity = Math.random() * 0.8 + 0.2;
    container.appendChild(div);

    let bottom = -50;
    let left = parseFloat(div.style.left);
    let speed = Math.random() * 1 + 1;

    function move() {
        bottom += speed;
        div.style.bottom = bottom + "px";
        if (bottom > window.innerHeight + 50) {
            div.remove();
        } else {
            requestAnimationFrame(move);
        }
    }
    move();
}

setInterval(spawnParticle, 300);
