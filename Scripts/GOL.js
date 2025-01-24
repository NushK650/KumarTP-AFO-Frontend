const gamesBtn = document.getElementById("GamesBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const input = document.getElementById("input");
const input2 = document.getElementById("input2")
const centerText = document.getElementById("centerText");
const playAgain = document.getElementById("playAgain");


const originalText = centerText.innerText;

let input1Value = '';

async function getComputerChoice(UserInput, UserInput2) {
    try {
      const response = await fetch(`https://kumartc-allforone-byf7akcedfckc0dh.westus-01.azurewebsites.net/GreaterOrLess/GreaterOrLess/${UserInput}/${UserInput2}`); // Replace this URL with your actual API endpoint
      const data = await response.text();
      return data; 
    } catch (error) {
      alert("Error", error);
      
    }
  }


input.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
  input1Value = input.value.trim();

  if (isNaN(input1Value)) {
    centerText.innerText="Please enter valid response";
    input.value = ""; 
    return;
  }

    input.classList.add("hidden");
    input2.classList.remove("hidden");
    centerText.innerText = "Give me another number";
    input.value = "";

}
});

input2.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
        const input2Value = input2.value.trim();

        if (isNaN(input2Value)) {
            centerText.innerText="Please enter valid response";
            input2.value = ""; 
            return;
          }

      const apiResponse =  await getComputerChoice(input1Value, input2Value);
      playAgain.classList.remove("hidden");
      input2.classList.add("hidden");
      centerText.innerText = apiResponse;
      input2.value = "";
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


