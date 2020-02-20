const container=document.querySelector('.wrapper');
const btnPrikaz=document.querySelector('#prikaz');
const btnPobednik=document.querySelector('#pobednik');
const divPokemon1=document.querySelector ('#pokemon');

let pokemon1 = {
    ime: 'pikacu',
    vrsta: 'elektricni',
    sposobnosti:['staticki elektricitet'],
    slika: "./img/pikacu.png",
    karakteristike: {
        napad: 55,
        odbrana: 30,
        brzina: 90,
    }
};

let pokemon2 = {
    ime: 'vaniliti',
    vrsta: 'led',
    sposobnosti: ['ledeno telo'],
    slika: "./img/vaniliti.png",
    karakteristike: {
        napad: 30,
        odbrana: 20,
        brzina: 30,
    }
};

let pokemon3 = {
    ime: 'petilil',
    vrsta: 'trava',
    sposobnosti: ['povecava brzinu na suncu', 'sprecava zabunu'],
    slika: "./img/petilil.png",
    karakteristike: {
        napad: 20,
        odbrana: 20,
        brzina: 20,
    }
};

let pokemon4 = {
    ime: 'doublade',
    vrsta: 'celicni',
    sposobnosti: ['osigurava pokemone od napada'],
    slika: "./img/doublade.png",
    karakteristike: {
        napad: 60,
        odbrana: 60,
        brzina: 25,
    }
};

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];

function prikaziPokemone(lista){
    let imena='';
for (let i=0; i<lista.length; i++){
    imena+=`<div> <ul> <li>Ime: ${lista[i].ime}</li> 
    <li>Vrsta: ${lista[i].vrsta}</li>
    <li>Sposobnosti: ${lista[i].sposobnosti}</li>
     <li>Karakteristike: <em>napad: </em> ${lista[i].karakteristike.napad} 
     <em>odbrana: </em> ${lista[i].karakteristike.odbrana} 
     <em>brzina:</em> ${lista[i].karakteristike.brzina} </li>
     </ul> 
     <img src=" ${lista[i].slika}" width="100px">
     </div>`
} return (imena);
} prikaziPokemone(pokemoni);

btnPrikaz.addEventListener('click',(e)=>{
    document.querySelector ('#pokemon').innerHTML=prikaziPokemone(pokemoni);
})

btnPobednik.addEventListener('click', (e)=>{
    divPokemon1.innerHTML=najjaciPokemon(pokemoni);
})
function najjaciPokemon(pokemoni) {
    let maxPos=0;
    let praviPokemon='';
    let max=pokemoni[maxPos];
    for (const pokemon of pokemoni) {
        if (max.karakteristike.napad<pokemon.karakteristike.napad)
        max=pokemon;
       praviPokemon= `<div> <ul> <li>Ime: ${max.ime}</li> 
       <li>Vrsta: ${max.vrsta}</li>
       <li>Sposobnosti: ${max.sposobnosti}</li>
        <li>Karakteristike <em>napad: </em> ${max.karakteristike.napad} 
        <em>odbrana: </em> ${max.karakteristike.odbrana} 
        <em>brzina:</em> ${max.karakteristike.brzina} </li>
        </ul> 
        <img src=" ${max.slika}">
        </div>`
    }
    
    return praviPokemon}