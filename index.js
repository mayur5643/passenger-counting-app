let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  // document.getElementById("count-el").innerText = count;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

// let name = "Mayur";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;
// console.log(myGreeting);

// let welcomeEl = document.getElementById("welcome-el");
// let name = "Mayur";
// let greeting = "Welcome back, ";

// welcomeEl.innerText = greeting + name;

// welcomeEl.innerText += " emoji";
