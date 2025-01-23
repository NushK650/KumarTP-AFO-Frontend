const gamesBtn = document.getElementById("GamesBtn")
const popup = document.getElementById("popup")
const closeBtn = document.getElementById("closeBtn")

gamesBtn.addEventListener("click", ()=>{
popup.classList.toggle("hidden");

});

closeBtn.addEventListener("click", ()=>{
    popup.classList.add("hidden");
})

