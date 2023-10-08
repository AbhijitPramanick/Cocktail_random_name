const api_url = "https://thecocktaildb.com/api/json/v1/1/random.php";
const display = document.getElementById("display");
const findBtn = document.getElementById("drinks_finder");
async function fetchRandomDrink() {
  const res = await fetch(api_url);
  const data = await res.json();
  console.log(data);
  console.log(`Drink name : ${data.drinks[0].strDrinkThumb}`);
  console.log(`Drink name : ${data.drinks[0].strDrink}`);

  //Creating a div container
  console.log("Creating a div container");
  let drinkContainer = document.createElement("div");
  drinkContainer.classList.add("drink-container");

  const html = `
  <img src = ${data.drinks[0].strDrinkThumb}></img>
  <p>${data.drinks[0].strDrink}</p>
  `;
  drinkContainer.innerHTML = html;

  display.appendChild(drinkContainer);
}
const performExecution = () => {
  display.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    fetchRandomDrink();
  }
};
window.addEventListener("load", performExecution);
findBtn.addEventListener("click", performExecution);
