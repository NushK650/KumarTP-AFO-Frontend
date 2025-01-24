const gamesBtn = document.getElementById("GamesBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const input = document.getElementById("input");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const centerText = document.getElementById("centerText");
const playAgain = document.getElementById("playAgain");
const Go = document.getElementById("Go")
const originalText = centerText.innerText;


async function getComputerChoice(name, place, adjective, activity) {
    try {
      const response = await fetch(`https://kumartc-allforone-byf7akcedfckc0dh.westus-01.azurewebsites.net/MadLib/MadLib/${name}/${place}/${adjective}/${activity}`); 
      const data = await response.text();
      return data; 
    } catch (error) {
      alert("Error", error);
      
    }
  }


Go.addEventListener("click", async ()=>{
    const name = input.value;
    const place = input2.value;
    const adjective = input3.value;
    const activity = input4.value;
    const apiResponse =  await getComputerChoice(name, place, adjective, activity);
centerText.innerText= apiResponse;
centerText.classList.remove("hidden")
input.classList.add("hidden");
    input2.classList.add("hidden");
    input3.classList.add("hidden");
    input4.classList.add("hidden");
    playAgain.classList.remove("hidden");

    Go.classList.add("hidden")
})



playAgain.addEventListener("click", ()=>{
    playAgain.classList.add("hidden");
    input.classList.remove("hidden");
    input2.classList.remove("hidden");
    input3.classList.remove("hidden");
    input4.classList.remove("hidden");
    Go.classList.remove("hidden")
    centerText.classList.add("hidden")
    centerText.innerText = originalText;
});

gamesBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});


