var timer = 60;
let makeBubble = () =>{
    var clutter = ""
for(var i = 1; i<=102; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector(".pbtm").innerHTML = clutter
}
let getNewHit = ()=>{
   var rann = Math.floor(Math.random()*10)
   document.querySelector("#hitVal").textContent = rann;
}
let runTimer = ()=>{
    var timInt = setInterval(()=>{
        if(timer>0){
        timer--;
        document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timInt)
        }
    }, 1000)

}
document.querySelector(".pbtm").addEventListener("click", (dets)=>{
console.log(dets);
})
getNewHit();
runTimer();

makeBubble();
