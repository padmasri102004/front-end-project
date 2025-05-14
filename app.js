// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 40;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  let cheese = document.querySelector("#cheese");
  //you can also use getElementById
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  let tomato = document.querySelector("#tomato");
  //you can also use getElementById
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() {
  let onion = document.querySelector("#onion");
  //you can also use getElementById
  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  //you can also use getElementById
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};


document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};


document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};


document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};


function renderButtons(){
  if (state.Patty) {
    document.querySelector(".btn-patty").classList.add("active");
  } else {
    document.querySelector(".btn-patty").classList.remove("active");
  }
  if (state.Cheese) {
    document.querySelector(".btn-cheese").classList.add("active");
  } else {
    document.querySelector(".btn-cheese").classList.remove("active");
  }
  if (state.Tomatoes) {
    document.querySelector(".btn-tomatoes").classList.add("active");
  } else {
    document.querySelector(".btn-tomatoes").classList.remove("active");
  }
  if (state.Onions) {
    document.querySelector(".btn-onions").classList.add("active");
  } else {
    document.querySelector(".btn-onions").classList.remove("active");
  }
  if (state.Lettuce) {
    document.querySelector(".btn-lettuce").classList.add("active");
  } else {
    document.querySelector(".btn-lettuce").classList.remove("active");
  }
}


function renderIngredientsBoard(){
  if(!state.Patty){
    document.querySelector("#ing-paddy").classList.add("hide");
  }else{
    document.querySelector("#ing-paddy").classList.remove("hide");
  }
  if(!state.Cheese){
    document.querySelector("#ing-cheese").classList.add("hide");
  }else{
    document.querySelector("#ing-cheese").classList.remove("hide");
  }
  if(!state.Tomatoes){
    document.querySelector("#ing-tomatoes").classList.add("hide");
  }else{
    document.querySelector("#ing-tomatoes").classList.remove("hide");
  }
  if(!state.Onions){
    document.querySelector("#ing-onions").classList.add("hide");
  }else{
    document.querySelector("#ing-onions").classList.remove("hide");
  }
  if(!state.Lettuce){
    document.querySelector("#ing-lettuce").classList.add("hide");
  }else{
    document.querySelector("#ing-lettuce").classList.remove("hide");
  }
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function renderPrice(){
  let totalPrice = wholeWheatBun;

  if(state.Patty){
    totalPrice += ingredients.Patty;
  }
  if(state.Cheese){
    totalPrice += ingredients.Cheese;
  }
  if(state.Tomatoes){
    totalPrice += ingredients.Tomatoes;
  }
  if(state.Onions){
    totalPrice += ingredients.Onions;
  }
  if(state.Lettuce){
    totalPrice += ingredients.Lettuce;
  }

  document.querySelector(".price-details").innerHTML = `INR ${totalPrice}`;
}





