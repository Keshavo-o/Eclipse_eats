// Smooth scroll
document.querySelector(".explore-btn")
.addEventListener("click",()=>{
    document.querySelector(".menu")
    .scrollIntoView({behavior:"smooth"});
});

// Scroll progress
window.addEventListener("scroll",()=>{
    const scrollTop=document.documentElement.scrollTop;
    const height=document.documentElement.scrollHeight-
                 document.documentElement.clientHeight;
    document.querySelector(".progress-bar").style.width=
        (scrollTop/height)*100+"%";
});

// Cursor glow
const cursor=document.querySelector(".cursor-glow");
document.addEventListener("mousemove",e=>{
    cursor.style.left=e.pageX+"px";
    cursor.style.top=e.pageY+"px";
});

// Typing effect
const text="Where Crunch Meets Chaos";
let i=0;
function typing(){
    if(i<text.length){
        document.querySelector(".typing").innerHTML+=text.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}
typing();

// Counter animation
const counters=document.querySelectorAll(".counter");
counters.forEach(counter=>{
    const update=()=>{
        const target=+counter.getAttribute("data-target");
        const count=+counter.innerText;
        const inc=target/100;
        if(count<target){
            counter.innerText=Math.ceil(count+inc);
            setTimeout(update,20);
        }else{
            counter.innerText=target;
        }
    };
    update();
});

// Scroll reveal
const sections=document.querySelectorAll(".section");
sections.forEach(section=>{
    section.style.opacity=0;
    section.style.transform="translateY(50px)";
    section.style.transition="1s";
});
window.addEventListener("scroll",()=>{
    sections.forEach(section=>{
        if(section.getBoundingClientRect().top<window.innerHeight-100){
            section.style.opacity=1;
            section.style.transform="translateY(0)";
        }
    });
});

// Fake live order popup
setInterval(()=>{
    const popup=document.querySelector(".live-popup");
    popup.style.display="block";
    setTimeout(()=>popup.style.display="none",3000);
},8000);
