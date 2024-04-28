let modal = document.getElementById("myModal");


// Viikot
Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(),0,1);
    var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
    var dayOfYear = ((today - onejan + 86400000)/86400000);
    return Math.ceil(dayOfYear/7)
};
    var today = new Date();
    var currentWeekNumber = today.getWeek();
    console.log(currentWeekNumber);


// Pop upien avaaminen:
// (Lisää omien viikkojen tiedot)
function vko1(){
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 21: 20.-26.5.";
    document.getElementById("sisalto").innerHTML = "<h3>Viikon vinkki: Uutelan ulkoilualue</h3>Tule tutustumaan monipuoliseen Uutelan ulkoilualueeseen Itä-Helsinkiin! Alueelta löytyy kolme luonnonsuojelualuetta ja useampi luontopolku, joista voit valita itsellesi sopivan reitin. Alueella on grillausmahdollisuus, ja se sopii hyvin myös kalastukseen.<br><a href='https://www.hel.fi/fi/kulttuuri-ja-vapaa-aika/ulkoilu-puistot-ja-luontokohteet/ulkoilualueet/uutelan-ulkoilualue' target='_blank'>Lue lisää täältä!</a><br><img src='metsa.jpg' alt='Metsä' id='kuva-uutela'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7931.858709703908!2d25.167263278024812!3d60.19786744632468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920faffb3dcccb%3A0x859aebf0d6c28672!2sUutelan%20ulkoilupuisto!5e0!3m2!1sfi!2sfi!4v1714309382031!5m2!1sfi!2sfi' width='400' height='300' style='border:0;' id='kartta-Uutela' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
} 
    
function vko2(){
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 22: 27.5.-2.6.";
    document.getElementById("sisalto").innerHTML = "Testi"
}
function vko3(){
    if (currentWeekNumber != 23) {
        modal.style.display = "none";
        window.alert("Menovinkki ei saatavilla");
    } else {
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 23: 3.-9.6.";
    document.getElementById("sisalto").innerHTML = "Testi 3";
    }
}
function vko4(){
    if (currentWeekNumber != 24) {
        modal.style.display = "none";
        window.alert("Menovinkki ei saatavilla");
    } else {
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 24: ";
    document.getElementById("sisalto").innerHTML = "Testi 4";
    }
}
function vko5(){
    if (currentWeekNumber != 25) {
        modal.style.display = "none";
        window.alert("Menovinkki ei saatavilla");
    } else {
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 25: ";
    document.getElementById("sisalto").innerHTML = "Testi 5";
    }
}
function vko6(){
    if (currentWeekNumber != 26) {
        modal.style.display = "none";
        window.alert("Menovinkki ei saatavilla");
    } else {
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 26: ";
    document.getElementById("sisalto").innerHTML = "Testi 6";
    }
}


let span = document.getElementsByClassName("close")[0];
// Sulkee pop upin x-painikkeesta
span.onclick = function() {
    modal.style.display = "none";
}
// Sulkee klikatessa pop upin ulkopuolelle
window.onclick = function(event) {
if (event.target == modal) {
      modal.style.display = "none";
    }
}