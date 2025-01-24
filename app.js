const gamesBtn = document.getElementById("GamesBtn")
const popup = document.getElementById("popup")
const closeBtn = document.getElementById("closeBtn")

gamesBtn.addEventListener("click", ()=>{
popup.classList.remove("hidden");

});

closeBtn.addEventListener("click", ()=>{
    popup.classList.add("hidden");
})

