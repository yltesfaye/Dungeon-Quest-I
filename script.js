
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let figthing;
let monsterHealth;
let inventory = ["Knife"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStat = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");


const weapons = [
    {
        name: "Knife",
        power: 5
    },
    {
        name: "Bow and Arrow",
        power: 30
    }, 
    {
        name: "Longsword",
        power: 50
    },
    {
        name: "War Hammer",
        power: 100
    }
];

const locations = [
    {
        name: "town square",
        "button text": ["Go to store" ,"Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon], 
        text: "You are in the town square. You see a sign that says \"Store.\""
    },
    {
        name: "store",
        "button text": ["Buy 10 health(10 gold)" ,"Buy weapon(30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown], 
        text: "You enter the store."
    },
    {
        name: "cave",
        "button text": ["Fight slime" ,"Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown], 
        text: "You enter the store."
    }

]
// initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

console.log("Hello")

function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
}
function goTown(){
    update(locations[0]);
}

function goStore() {
    update(locations[1]);
    
}
function goCave() {
    console.log("Going to cave.")
}
function fightDragon() {
    console.log("Fighthing dragon.")
}


function buyHealth(){
    if(gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
    } else {
        text.innerText = "You don't have enough gold"
    }
    
}
function buyWeapon(){
    if(currentWeapon < weapons.length - 1) {
        if(gold >= 30) {
                gold -= 30;
                currentWeapon++;
                let newWeapon = weapons[currentWeapon].name;
                gold.innerText = gold;
                text.innerText = "You now have a " + newWeapon + ".";
                inventory.push(newWeapon);
                text.innerText += "In your inventory you have: " + inventory;

            } else {
                text.innerText = "You don't have enough gold to buy a weapon.";
            }
    }
    
    
}
function fightSlime(){
    
}
function figthBeast(){
    
}
