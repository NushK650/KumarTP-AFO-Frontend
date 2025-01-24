const gamesBtn = document.getElementById("GamesBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const input = document.getElementById("input");
const centerText = document.getElementById("centerText");
const playAgain = document.getElementById("playAgain");
const FastFood = document.getElementById("FastFood");
const FineDining = document.getElementById("FineDining");
const CasualDining = document.getElementById("CasualDining");

const originalText = centerText.innerText;

async function getComputerChoice(UserInput) {
  try {
    const response = await fetch(
      `https://kumartc-allforone-byf7akcedfckc0dh.westus-01.azurewebsites.net/RestaurantPicker/RestaurantPicker/${UserInput}`
    ); // Replace this URL with your actual API endpoint
    const data = await response.text();
    return data;
  } catch (error) {
    alert("Error", error);
  }
}

CasualDining.addEventListener("click", async () => {
     UserInput = "casual dining"
    const apiResponse =  await getComputerChoice(UserInput);
  FastFood.classList.add("hidden");
  CasualDining.classList.add("hidden");
  FineDining.classList.add("hidden");
 
  playAgain.classList.remove("hidden");
  centerText.innerText = apiResponse;
});

FastFood.addEventListener("click", async  () => {
     UserInput = "fast food"
    const apiResponse =  await getComputerChoice(UserInput);
  FastFood.classList.add("hidden");
  CasualDining.classList.add("hidden");
  FineDining.classList.add("hidden");
  
  playAgain.classList.remove("hidden");
  centerText.innerText = apiResponse;
});

FineDining.addEventListener("click", async  () => {
    UserInput = "fine dining"
    const apiResponse =  await getComputerChoice(UserInput);
  FastFood.classList.add("hidden");
  CasualDining.classList.add("hidden");
  FineDining.classList.add("hidden");
  
  playAgain.classList.remove("hidden");
  centerText.innerText = apiResponse;
});


playAgain.addEventListener("click", () => {
  playAgain.classList.add("hidden");
  FastFood.classList.remove("hidden");
  CasualDining.classList.remove("hidden");
  FineDining.classList.remove("hidden");
  centerText.innerText = originalText;
});

gamesBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});
