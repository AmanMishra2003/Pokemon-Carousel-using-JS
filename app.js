let values = {
    "img" : document.querySelector('img'),
    "nm" :document.querySelector('.name'),
    "titl" :document.querySelector('.title'),
    "desc" : document.querySelector('.desc'), 
}

let obj = [
    {
        "image" : "images/greyninja.png", 
        "name" :"Greninja", 
        "title":"Kalos Region" , 
        "description":"It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two."
    },
    {
        "image": "images/493.png",
        "name" :"Arceus",
        "title": "Sinnoh Region",
        "description":"According to the legends of Sinnoh, this Pokémon emerged from an egg and shaped all there is in this world."
    },
    {
        "image":  "images/257.png",
        "name" : "Blaziken",
        "title": "Hoenn Region",
        "description": "In battle, Blaziken blows out intense flames from its wrists and attacks foes courageously. The stronger the foe, the more intensely this Pokémon’s wrists burn."
    },
    {
        "image":  "images/644.png",
        "name" :  "Zekrom",
        "title":  "Unova Region",
        "description":  "This legendary Pokémon can scorch the world with lightning. It assists those who want to build an ideal world."

    },
    {
        "image":  "images/250.png",
        "name" :  "HO-OH",
        "title":  "Jhoto Region",
        "description":  "Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow."

    }
]

values.img.src = obj[0].image
values.nm.innerText = obj[0].name
values.titl.innerText = obj[0].title
values.desc.innerText = obj[0].description

let obj_value = Object.keys(obj)
let btn1 = document.querySelector(".next")
let btn2 = document.querySelector(".prev")
let btn3 = document.querySelector(".surprise")


let i=1;

btn1.addEventListener("click",()=>{
    change(i)
    ++i 
})


btn2.addEventListener("click",()=>{
    if(i>0){
        change(--i)
    }else{
        change(0)
    }
})

btn3.addEventListener("click", ()=>{
    let randInt = Math.floor(Math.random()*5)
    change(randInt)
    console.log(randInt)
})

let change = function(a){
    values.img.src = obj[a].image
    values.nm.innerText = obj[a].name
    values.titl.innerText = obj[a].title
    values.desc.innerHtml = obj[a].description
}

