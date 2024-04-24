let modal = document.getElementById("myModal");

Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(),0,1);
    var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
    var dayOfYear = ((today - onejan + 86400000)/86400000);
    return Math.ceil(dayOfYear/7)
};

    var today = new Date();
    var currentWeekNumber = today.getWeek();
    console.log(currentWeekNumber);

// Avaa pop upin
function vko1(){
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Otsikko 1";
    document.getElementById("sisalto").innerHTML = "Testi 1";
    } 
    
function vko2(){
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Otsikko 2";
    document.getElementById("sisalto").innerHTML = "Testi 2"
}
function vko3(){
    if (currentWeekNumber != 21) {
        modal.style.display = "none";
        window.alert("Menovinkki ei saatavilla");
    } else {
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Otsikko 3";
    document.getElementById("sisalto").innerHTML = "Testi 3";
    }
}
function vko4(){
    if (currentWeekNumber != 22) {
        modal.style.display = "none";
        window.alert("Menovinkki ei saatavilla");
    } else {
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Otsikko 4";
    document.getElementById("sisalto").innerHTML = "Testi 4";
    }
}
function vko5(){
    if (currentWeekNumber != 23) {
        modal.style.display = "none";
        window.alert("Menovinkki ei saatavilla");
    } else {
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Otsikko 5";
    document.getElementById("sisalto").innerHTML = "Testi 5";
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
