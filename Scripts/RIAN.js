const gamesBtn = document.getElementById("GamesBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const input = document.getElementById("input");
const centerText = document.getElementById("centerText");
const playAgain = document.getElementById("playAgain");
const originalText = centerText.innerText;


async function getComputerChoice(UserInput) {
    try {
      const response = await fetch(`https://kumartc-allforone-byf7akcedfckc0dh.westus-01.azurewebsites.net/ReverseItAN/ReverseItAN/${UserInput}`); // Replace this URL with your actual API endpoint
      const data = await response.text();
      return data; 
    } catch (error) {
      alert("Error", error);
      
    }
  }


input.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    const userInput = input.value.trim();
    const apiResponse =  await getComputerChoice(userInput);
    playAgain.classList.remove("hidden");
    input.classList.add("hidden");
    centerText.innerText = apiResponse;
    input.value = "";
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


