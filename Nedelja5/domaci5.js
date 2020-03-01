const form = document.querySelector('.wrapper');
const select = document.querySelector('#zarada');
const opis = document.querySelector('#opis');
const iznosInput = document.querySelector('#iznos');
const btnDodati = document.querySelector('.dodati');
const listaPrihoda = document.querySelector('.lista-prihoda');
const listaRashoda = document.querySelector('.lista-rashoda');
//const procenat=document.querySelector('#procenat');
const ukupno = document.querySelector('#trenutno-stanje');
const ukupniPrihodi = document.querySelector('#ukupni-prihodi');
const ukupniRashodi = document.querySelector('#ukupni-rashodi');
const procenatRashoda = document.querySelector('#procenat-rashoda');

let ukupanPrihod = 0;
let ukupanRashod = 0;
let trenutnoStanje = 0;
let procRas = 0;
ukupniPrihodi.innerText = ukupanPrihod;
ukupniRashodi.innerText = ukupanRashod;
ukupno.innerText = trenutnoStanje;

let sviPrihodi = [];
let sviRashodi = [];
let cene = {
    rashodi: 0,
    prihodi: 0,
    ukupno: 0
}
let validacija = false;

/* select.addEventListener('change', (e)=>{
    if(select.value=='Prihod'){
        procenat.style.display='none'
    }
    else if (select.value=='Rashod'){
        procenat.style.display='block'
    }
}) */

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (select.value == 'Prihod') {
        let prihod1 = {
            opis: opis.value,
            iznos: Number(iznos.value)
        }
        sviPrihodi.push(prihod1);

    }
    else if (select.value == 'Rashod') {
        let rashod1 = {
            opis: opis.value,
            iznos: Number(iznos.value),
            procent: izracunatiProcenat()
        }
        sviRashodi.push(rashod1);

    }
    // console.log(sviPrihodi);
    izracunatiPrihod();
    izracunatiRashod();
  /*    if (select.value=='Rashod'){
    sviRashodi.push(rashod1);
    
} */console.log(sviRashodi);
    izracunatiUkupno();

})
function izracunatiProcenat() {
    let procenat = (Number(iznos.value) / cene.prihodi * 100);
    return procenat;
}
function validirati() {
    console.log(iznos.value);
    if (iznos.value == 0) {
        alert('Vrednost ne moze biti nula')
        iznos.value = '';
    }
    else if (iznos.value < 0) {
        alert('vrednost ne moze biti manja od 0')
        iznos.value = '';
    }
}

function izracunatiPrihod() {
    let ukupanPrihod = 0;

    for (let i = 0; i < sviPrihodi.length; i++) {
        console.log(sviPrihodi[i].iznos);
        ukupanPrihod += sviPrihodi[i].iznos;
    }
    ukupniPrihodi.innerText = ukupanPrihod;
    cene.prihodi = ukupanPrihod;
}

function izracunatiRashod() {
    let ukupanRashod = 0;

    for (let i = 0; i < sviRashodi.length; i++) {
        console.log(sviRashodi[i].iznos);
        ukupanRashod += sviRashodi[i].iznos;
    }
    ukupniRashodi.innerText = ukupanRashod;
    cene.rashodi = ukupanRashod;
    if (select.value == 'Rashod') {
        procRas = ((iznosInput.value / cene.prihodi * 100).toFixed(2));
        procenatRashoda.innerText = `  ${procRas}%`;
        //rashod1.procenat = procRas;

    }

}

function izracunatiUkupno() {
    let trenutnoStanje = 0;
    trenutnoStanje = cene.prihodi - cene.rashodi;
    ukupno.innerText = trenutnoStanje;

    console.log(cene.rashodi, cene.prihodi)
}

form.addEventListener('submit', (e) => {
    li1 = document.createElement('li');
    li1.id = "ispis-prihoda"

    li2 = document.createElement('li');
    li2.id = 'ispis-rashoda'

    if (select.value == 'Prihod') {
        li1.appendChild(document.createTextNode(`${opis.value}:  +${iznos.value}`))
        document.querySelector('#opis').value='';
        document.querySelector('#iznos').value='';
        li1.addEventListener('mouseover', (e) => {
            let btnUkloniti = document.createElement('button');
            btnUkloniti.className = 'btn-ukloniti';
            btnUkloniti.innerText = 'Ukloniti';
            li1.appendChild(btnUkloniti);
            btnUkloniti.addEventListener('click', brisanje)
            function brisanje(e) {
                if (e.target.classList.contains('btn-ukloniti')) {
                    let li1 = e.target.parentElement;
                    listaPrihoda.removeChild(li1);
                }
            }
        })
        listaPrihoda.appendChild(li1);
    }

    else if (select.value == 'Rashod') {
        li2.appendChild(document.createTextNode(`${opis.value}:  -${iznos.value}; ${(izracunatiProcenat()).toFixed(2)}%`))
        document.querySelector('#opis').value='';
        document.querySelector('#iznos').value='';
        li2.addEventListener('mouseover', (e) => {
            let btnUkloniti = document.createElement('button');
            btnUkloniti.className = 'btn-ukloniti';
            btnUkloniti.innerText = 'Ukloniti';
            li2.appendChild(btnUkloniti);
            btnUkloniti.addEventListener('click', brisanje)
            function brisanje(e) {
                if (e.target.classList.contains('btn-ukloniti')) {
                    let li2 = e.target.parentElement;
                    listaRashoda.removeChild(li2);
                }
            }
        })
        listaRashoda.appendChild(li2);
    }
})