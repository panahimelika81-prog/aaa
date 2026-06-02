const heart = document.getElementById("heart");
const scene = document.getElementById("scene");
const envelope = document.getElementById("envelope");
let words = [];
for(let i=0;i<80;i++){
    let span = document.createElement("span");
    span.className = "word";
    span.innerText = "I love you";
    heart.appendChild(span);
    words.push({ el:span, t:Math.random()*Math.PI*2 });
}
function animate(){
    words.forEach(obj=>{
        obj.t += 0.02;
        let x = 16 * Math.pow(Math.sin(obj.t),3);
        let y =
        13*Math.cos(obj.t)
        -5*Math.cos(2*obj.t)
        -2*Math.cos(3*obj.t)
        -Math.cos(4*obj.t);
        obj.el.style.left =
        (window.innerWidth/2 + x*18) + "px";
        obj.el.style.top =
        (window.innerHeight/2 - y*18) + "px";
    });
    requestAnimationFrame(animate);
}
animate();
/* نمایش پاکت */
setTimeout(()=>{
    heart.style.display="none";
    scene.classList.remove("hide");
},6000);
/* کلیک = باز/بسته */
let open = false;
envelope.onclick = ()=>{
    if(!open){
        scene.classList.add("open");
        scene.classList.remove("closed");
        setTimeout(()=>{
    typeWriter();
}, 900);
        open = true;
    } else {
        scene.classList.remove("open");
        scene.classList.add("closed");
        open = false;
    }
};
const text = 
`You are even more beautiful and cuter than this moon.
If the moon could talk,
it would probably be jealous of you.
Don’t forget…
I will always love you so much.
My little moon.`;
let i = 0;
const speed = 35; // سرعت تایپ
function typeWriter(){
    if(i < text.length){
        document.getElementById("message").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}