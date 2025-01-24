const gamesBtn = document.getElementById("GamesBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const input = document.getElementById("input");
const centerText = document.getElementById("centerText");
const playAgain = document.getElementById("playAgain");
const originalText = centerText.innerText;
const userInput = input.value

async function getComputerChoice() {
    try {
      const response = await fetch("https://kumartc-allforone-byf7akcedfckc0dh.westus-01.azurewebsites.net/Magic8Ball/Magic8Ball/userinput"); // Replace this URL with your actual API endpoint
      const data = await response.text();
      return data; 
    } catch (error) {
      alert("Error", error);
      
    }
  }


input.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    const apiResponse =  await getComputerChoice(userInput);
    input.value = "";
    playAgain.classList.remove("hidden");
    input.classList.add("hidden");
    centerText.innerText = apiResponse;
  }
});

playAgain.addEventListener("click", ()=>{
    playAgain.classList.add("hidden");
    input.classList.remove("hidden");
    centerText.innerText = originalText;
});

gamesBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});


