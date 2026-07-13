function nextPage(page) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });

  document.getElementById("page" + page).classList.add("active");

  // Fireworks on last page
  if (page === 4) {
    for (let i = 0; i < 80; i++) {
      const emoji = document.createElement("div");

      emoji.innerHTML = ["🎉","🎊","✨","🎈","❤️"][Math.floor(Math.random()*5)];

      emoji.style.position = "fixed";
      emoji.style.left = Math.random() * 100 + "vw";
      emoji.style.top = "-30px";
      emoji.style.fontSize = (20 + Math.random() * 20) + "px";
      emoji.style.transition = "4s linear";
      emoji.style.pointerEvents = "none";
      emoji.style.zIndex = "9999";

      document.body.appendChild(emoji);

      setTimeout(() => {
        emoji.style.top = "110vh";
        emoji.style.transform =
          "rotate(" + (Math.random() * 720) + "deg)";
      }, 50);

      setTimeout(() => {
        emoji.remove();
      }, 4500);
    }
  }
}
