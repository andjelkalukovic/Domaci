let pCount=document.querySelector ('#count');
let count=0;
let btnNaruci=document.querySelector ('#naruci');

btnNaruci.addEventListener ('click', () => {
    count++;
pCount.innerHTML=count;
})

let btnNaruci2=document.querySelector ('#naruci2');
btnNaruci2.addEventListener ('click', () => {
    count++;
pCount.innerHTML=count;
})

let btnNaruci3=document.querySelector ('#naruci3');
btnNaruci3.addEventListener ('click', () =>{
    if (count==0){
        alert ('Potrebno je označiti količinu koju želite da naručite.');
    } else {alert (`Broj naručenih pizza je: ${count}.` +'\n'+ Date ())
}   count=0;
pCount.innerHTML=count; 
})

let btnNaruci4=document.querySelector ('#naruci4');
btnNaruci4.addEventListener ('click', ()=>{
    if (count==0){
        alert ('Potrebno je označiti količinu koju želite da naručite.');
    } else {
    alert (`Broj naručenih pizza je: ${count}.` +'\n'+ Date ())  }
    count=0;
    pCount.innerHTML=count;
})
let app=document.querySelector('#app');
app.appendChild (pCount);