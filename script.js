
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let figthing;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthTest = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStat = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

console.log("Hello")

function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";

}
function goCave() {
    console.log("Going to cave.")
}
function fightDragon() {
    console.log("Fighthing dragon.")
}


