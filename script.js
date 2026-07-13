function celebrate() {
    const popup = document.getElementById("popup");
    popup.style.display = "flex";

    // Confetti effect
    for (let i = 0; i < 80; i++) {
        let confetti = document.createElement("div");
        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = (20 + Math.random() * 20) + "px";
        confetti.style.transition = "4s linear";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.top = "110vh";
            confetti.style.transform =
                "rotate(" + (Math.random() * 720) + "deg)";
        }, 100);

        setTimeout(() => {
            confetti.remove();
        }, 4500);
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
                                   }
