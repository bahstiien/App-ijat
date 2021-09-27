// Recupération dans DOM
let zoneInput = document.querySelector(".zoneInput");
let dateInput = document.querySelector(".choixDateUser");
let hoursInput = document.querySelector(".choixhoursUser");
let minInput = document.querySelector(".choixMinUser");
let btn = document.querySelector('.btn');
let resultDiv = document.querySelector('.resultat');
let result2Div = document.querySelector('.resultat2');
let btnRepeat = document.querySelector('.btn_repeat')

// Press BTN
btn.addEventListener('click', function(){
    let zone = parseInt(zoneInput.value);
    const nowDate = Date.now();
    let userDate = dateInput.value;
    let hours = hoursInput.value;
    let min = minInput.value;
    let ijatCompt = 0;

    
    // RECUPERATION DATE DE L'USER 
    let decoupe = userDate.split('-')
    let year = decoupe[0];
    let month = decoupe[1];
    let newMonth = ((parseInt(decoupe[1]) -1)).toString();
    let day = decoupe[2];
    let dateStart = new Date(year, newMonth, day, hours, min);


    // CALCUL DES DUREES / TAUX
    let startNum = dateStart.getTime();
    let duree = (nowDate - startNum)/1000;
    let tauxSec = zone/86400;
    ijatCompt = ((tauxSec * duree).toFixed(2));
    resultDiv.innerHTML = (`Tu as gagné à ${ijatCompt} €`)
})