function nextPage(pageNo){

    let pages = document.querySelectorAll(".page");

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById("page"+pageNo).classList.add("active");

    // Celebration on last page
    if(pageNo===4){

        for(let i=0;i<80;i++){

            let e=document.createElement("div");

            let emojis=["🎉","🎊","✨","❤️","🎈","🌸"];

            e.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

            e.style.position="fixed";
            e.style.left=Math.random()*100+"vw";
            e.style.top="-50px";
            e.style.fontSize=(20+Math.random()*20)+"px";
            e.style.transition="4s linear";
            e.style.pointerEvents="none";
            e.style.zIndex="999";

            document.body.appendChild(e);

            setTimeout(()=>{
                e.style.top="110vh";
                e.style.transform=
                "rotate("+(Math.random()*720)+"deg)";
            },50);

            setTimeout(()=>{
                e.remove();
            },4500);
        }
    }
              }
