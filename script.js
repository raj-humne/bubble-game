var timer = 30;
var score = 0;
var hitrn;
let makeBubble = () => {
    var clutter = ""
    for (var i = 1; i <= 102; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class = bubble> ${rn} </div>`
    }
    document.querySelector(".pbtm").innerHTML = clutter
}
let getNewHit = () => {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitVal").innerHTML = hitrn
}
let runTimer = () => {
    let timInt = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else {
            clearInterval(timInt);
            document.querySelector(".pbtm").innerHTML = `
        <h1>Game Over</h1> <br>
        <h2>Your Score = ${score} </h2>
        <button class="btn">Start Again</button>`
            document.querySelector(".btn").addEventListener("click", () => {
                 timer = 6;
        score = 0;
        document.querySelector(".scr").textContent = score;
        document.querySelector("#timerVal").textContent = timer;
                runTimer()
                makeBubble()
                getNewHit()
            })
        }
    },

        1000)
}
let increaseScore = () => {
    score += 10;
    document.querySelector(".scr").textContent = score;
}
document.querySelector(".pbtm").addEventListener("click", (dets) => {

    var clickedNum = Number(dets.target.textContent)
    if (clickedNum === hitrn) {
        increaseScore()
        makeBubble()
        getNewHit()
    }
})
runTimer()
makeBubble()
getNewHit()
