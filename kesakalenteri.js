let modal = document.getElementById("myModal");


// Viikot
Date.prototype.getWeek = function() {
    let onejan = new Date(this.getFullYear(),0,1);
    let today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
    let dayOfYear = ((today - onejan + 86400000)/86400000);
    return Math.ceil(dayOfYear/7)
};
    let today = new Date();
    let currentWeekNumber = today.getWeek();
    console.log(currentWeekNumber);


// Pop upien avaaminen:
// (Lisää omien viikkojen tiedot)
function vko1(){
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 21: 20.5. - 26.5.";
    document.getElementById("sisalto").innerHTML = "<h3>Viikon vinkki: Uutelan ulkoilualue</h3>Tule tutustumaan monipuoliseen Uutelan ulkoilualueeseen Itä-Helsinkiin! Uutelan kallioiset merenrantamaisemat, metsät, suot ja vanhat huvilat nostavat lenkin tunnelman uudelle tasolle. Alueelta löytyy kolme luonnonsuojelualuetta ja useampi luontopolku, joista voit valita itsellesi sopivan reitin. Alueella on myös grillausmahdollisuus. <a href='https://www.hel.fi/fi/kulttuuri-ja-vapaa-aika/ulkoilu-puistot-ja-luontokohteet/ulkoilualueet/uutelan-ulkoilualue' target='_blank'> Lue lisää täältä!</a><br><br>Vinkkaaja: Kirsi<br><img src='metsa.jpg' alt='Metsä' id='kuva-uutela'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7931.858709703908!2d25.167263278024812!3d60.19786744632468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920faffb3dcccb%3A0x859aebf0d6c28672!2sUutelan%20ulkoilupuisto!5e0!3m2!1sfi!2sfi!4v1714309382031!5m2!1sfi!2sfi' width='400' height='300' style='border:1px solid black;' id='kartta-Uutela' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
} 
    
function vko2(){
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 22: 27.5. - 2.6.";
    document.getElementById("sisalto").innerHTML = "<h3>Viikon vinkki: Ilmaistiistai Arkkitehtuurimuseossa ja Designmuseossa</h3>Arkkitehtuurimuseoon ja Designmuseoon on ilmainen sisäänpääsy joka kuun viimeisenä tiistaina koko päivän! Pääset tutustumaan ajankohtaisiin näyttelyihimme sekä nauttimaan ohjelmasta maksutta.<a href='https://www.hs.fi/menokone/events/114560' target='_blank'> Lue lisää täältä!</a><br><br> Yhdessä keksitty vinkki<br><img src='museo.jpg' alt='Museo' id='kuva-museo'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20373.47041711493!2d24.948198241102947!3d60.164013687887255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc85ec2923d%3A0x27f1a8789f80e39!2sArkkitehtuurimuseo!5e0!3m2!1sfi!2sfi!4v1714998290791!5m2!1sfi!2sfi' width='400' height='300' style='border:1px solid black;' id='kartta-Uutela' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>"
}
function vko3(){
    if (currentWeekNumber < 23) {
       modal.style.display = "none";
       window.alert("Hups! Menovinkki tulee näkyviin vasta viikolla 23");
    } else {
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 23: 3.6. - 9.6.";
    document.getElementById("sisalto").innerHTML = "<h3>Viikon vinkki: Haagan alppiruusupuisto</h3> Tämä ainutlaatuinen puisto Haagassa houkuttelee tuhansia kävijöitä joka kesä - liity joukkoon! Kauniiden alppiruusujen ja atsaleoiden kukinta on parhaimmillaan juuri nyt, kesäkuun alussa. <a href='https://yle.fi/a/3-12490680' target='_blank'> Lue lisää täältä!</a><br><br>Vinkkaaja: Kirsi<br><img src='ruusut.jpg' alt='alppiruusut' id='kuva-haaga'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.5171335871244!2d24.891293676719627!3d60.221820239264545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df620056ad87d%3A0x4e9e52658a59d7f4!2sHaagan%20Alppiruusupuisto!5e0!3m2!1sfi!2sfi!4v1714414137801!5m2!1sfi!2sfi' width='400' height='300' style='border: 1px solid black;' id='kartta-haaga' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
    }
}
function vko4(){
    if (currentWeekNumber < 24) {
        modal.style.display = "none";
        window.alert("Hups! Menovinkki tulee näkyviin vasta viikolla 24");
    } else {
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 24: 10.6. - 16.6.";
    document.getElementById("sisalto").innerHTML = "<h3>Viikon vinkki: Merellinen Helsinki päivä</h3>12. kesäkuuta vietetään Merellinen Helsinki päivää! Päivän aikana pääset tutustumaan Helsingin kauniiseen saaristoon ja sen maisemiin. Tekemistä löytyy koko perheelle, joten hyppää veneeseen ja anna aaltojen viedä sinut uuteen seikkailuun.<br><br>Vinkkaaja: Jussi<br><img src='veneet.jpg' alt='veneet' id='kuva-veneet'>";
    }
}
function vko5(){
    if (currentWeekNumber < 25) {
        modal.style.display = "none";
        window.alert("Hups! Menovinkki tulee näkyviin vasta viikolla 25");
    } else {
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 25: 17.6. - 23.6.";
    document.getElementById("sisalto").innerHTML = "<h3>Viikon vinkki: Seurasaari</h3> Tule kokemaan Seurasaaren luonnon kauneus. Koe Seurasaaren historiallinen museoalue ja kävele läpi kansanpuiston. Äläkä unohda, että on juhannusviikko, joten Seurasaarisäätiö tarjoaa mahdollisuuden tulla juhlistamaan juhannusta 21. kesäkuuta. Sisäänpääsy on maksuton alle 12-vuotiaille ja muille 28€. Hyvää juhannusta kaikille.<br><br>Vinkkaaja: Jussi<br><img src='juhannus.jpg' alt='ranta' id='kuva-juhannus'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7935.928695186066!2d24.874380180682756!3d60.181027300604924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920a111718eddb%3A0xe485e638e2ad0e4e!2sSeurasaari!5e0!3m2!1sfi!2sfi!4v1714998138057!5m2!1sfi!2sfi' width='400' height='300' style='border:solid black 1px;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade' id='kartta-seurasaari'></iframe>";
    }
}
function vko6(){
    if (currentWeekNumber < 26) {
        modal.style.display = "none";
        window.alert("Hups! Menovinkki tulee näkyviin vasta viikolla 26");
    } else {
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 26: 24.6. - 30.6.";
    document.getElementById("sisalto").innerHTML = "<h3>Viikon vinkki: Päiväretki Suomenlinnaan</h3>Tule kokemaan pieni pala Suomen historiaa Viaporiin eli Suomenlinnaan. 1700-luvulla rakennettu linnoitus varastoi sisäänsä yli 250 vuotta Suomen historiaa. Suomenlinna tarjoaa mahtavat näkymät merelle ja saaren kahvilat, museo ja kesäteatteri tarjoaa varmasti tekemistä koko päiväksi ja koko perheelle.<br><br>Vinkkaaja: Jussi<br><img src='suomenlinna.jpg' alt='suomenlinna' id='kuva-suomenlinna'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15888.646966958655!2d24.958078888087435!3d60.14628370127428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920b8e716456fb%3A0xa00b553b99239b0!2sSuomenlinna%2C%20Helsinki!5e0!3m2!1sfi!2sfi!4v1714997545930!5m2!1sfi!2sfi' width='400' height='300' style='border:solid black 1px;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade' id='kartta-suomenlinna'></iframe>";
   }
}
function vko7(){
    if (currentWeekNumber < 27) {
        modal.style.display = "none";
        window.alert("Hups! Menovinkki tulee näkyviin vasta viikolla 27");
    } else {
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 27: 1.07.-7.07.";
    document.getElementById("sisalto").innerHTML = "<h3>Viikon vinkki: Pizzaristeily Helsingin saaristossa 2024</h3>Nauti kahden tunnin mittaisesta illanvietosta, joka yhdistää Katajanokanluodon herkulliset, kiviarinauunissa paistetut pizzat, upeat maisemat, rennon tunnelman ja Helsingin rantaviivojen kesäisen kuhinan. <a href='https://www.myhelsinki.fi/fi/n%C3%A4e-ja-koe/tapahtumat/pizzaristeily-helsingin-saaristossa-2024-43' target='_blank'>Lue lisää täältä!</a><br><br>Vinkkaaja: Aleksandr<br><img src='pizza_viikko7.jpg' alt='pizza' id='kuva-pizza'>";
    }
}
function vko8(){
    if (currentWeekNumber < 28) {
        modal.style.display = "none";
        window.alert("Hups! Menovinkki tulee näkyviin vasta viikolla 28");
    } else {
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 28: 8.07.-14.07.";
    document.getElementById("sisalto").innerHTML = "<h3>Viikon vinkki: Epic Scape Helsinki</h3> Kaupunkiseikkailupeli, joka haastaa pelaajat liikkumaan ja tutkimaan ympäristöä Helsingissä. Kaupunkiseikkailupeli Epic Scape tarjoaa unohtumattoman kokemuksen kaikenikäisille pelaajille, erityisesti perheille ja ystäväporukoille. Peliin ei ole asetettu ikärajoja, mikä tekee siitä ihanteellisen valinnan niin nuoremmille seikkailijoille kuin aikuisillekin. Epic Scape kannustaa kaikki seikkailunhaluiset tutkimaan Helsingin kaupunkia ja ratkaisemaan arvoituksia yhdessä.<a href='https://www.hs.fi/menokone/events/113875' target='_blank'>Lue lisää täältä!</a><br><br>Vinkkaaja: Aleksandr<br><img src='viikko8.jpg' alt='Epic Scape' id='kuva-vko8'>";
    }
}
function vko9(){
    if (currentWeekNumber < 29) {
        modal.style.display = "none";
        window.alert("Hups! Menovinkki tulee näkyviin vasta viikolla 29");
    } else {
    modal.style.display = "block"
    document.getElementById("menovinkki").innerHTML = "Viikko 29: 15.07.-21.07.";
    document.getElementById("sisalto").innerHTML = "<h3>Pajan puistokonsertti: Behm</h3>BEHMin kaltaisia menestystarinoita on yksi miljoonassa. Draaman kaari viehättää -debyyttialbumillaan ilmiömäiseen suosioon jo vuonna 2020 noussut laulaja-lauluntekijä on kiistatta yksi musiikkikentän suosituimmista tekijöistä tällä vuosikymmenellä. <a href='https://www.hs.fi/menokone/events/96831' target='_blank'>Lue lisää täältä!</a><br><br>Vinkkaaja: Aleksandr<br> <img src='viikko9.png' alt='Behm' id='kuva-vko9'>";
    }
}
function vko10(){
    if (currentWeekNumber < 30) {
        modal.style.display = "none";
        window.alert("Hups! Menovinkki tulee näkyviin vasta viikolla 30");
    } else {
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 30: 22.07.-28.07.";
    document.getElementById("sisalto").innerHTML = "<h3>Sailing Beginners Course / Purjehduksen alkeiskurssi</h3> Oletko valmis lähtemään purjehtimaan ja tutkimaan jännittävää purjehduksen maailmaa? Alkeiskurssimme on täydellinen aloituspiste kaikille, jotka haluavat oppia navigoimaan avomerillä ja omaksumaan merien vapauden. Lisätiedot ja varaukset: <a href='https://www.hs.fi/menokone/events/108811?movie=false&isAdvertisement=false' target='_blank'>Täältä!</a>";
    }

}
function vko11(){
    if (currentWeekNumber < 31) {
        modal.style.display = "none";
        window.alert("Hups! Menovinkki tulee näkyviin vasta viikolla 31");
    } else {
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 31: 29.07.-04.08.";
    document.getElementById("sisalto").innerHTML = "<h3>Pajan puistokonsertti: Behm</h3>BEHMin kaltaisia menestystarinoita on yksi miljoonassa. Draaman kaari viehättää -debyyttialbumillaan ilmiömäiseen suosioon jo vuonna 2020 noussut laulaja-lauluntekijä on kiistatta yksi musiikkikentän suosituimmista tekijöistä tällä vuosikymmenellä. <a href='https://www.hs.fi/menokone/events/96831' target='_blank'>Lue lisää täältä!</a>";
    }
}
function vko12(){
    if (currentWeekNumber < 32) {
        modal.style.display = "none";
        window.alert("Hups! Menovinkki tulee näkyviin vasta viikolla 32");  
    } else {
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 32: 05.07.-11.08.";
    document.getElementById("sisalto").innerHTML = "<h3>Pajan puistokonsertti: Behm</h3>BEHMin kaltaisia menestystarinoita on yksi miljoonassa. Draaman kaari viehättää -debyyttialbumillaan ilmiömäiseen suosioon jo vuonna 2020 noussut laulaja-lauluntekijä on kiistatta yksi musiikkikentän suosituimmista tekijöistä tällä vuosikymmenellä. <a href='https://www.hs.fi/menokone/events/96831' target='_blank'>Lue lisää täältä!</a>";
    }
}

function vko13(){
    if (currentWeekNumber < 33) {
        modal.style.display = "none";
        window.alert("Hups! Menovinkki tulee näkyviin vasta viikolla 33");
    } else {
    modal.style.display = "block";
    document.getElementById("menovinkki").innerHTML = "Viikko 33: 12.8. - 18.8.";
    document.getElementById("sisalto").innerHTML = "<h3>Viikon vinkki: Taiteiden yö 15.8.</h3>Taiteiden yö on maksuton, monipuolinen kulttuuritapahtuma, joka järjestetään useissa Suomen kaupungeissa elokuussa. Helsingissä tapahtumatarjonta on tunnetusti erittäin laaja, joten jokaiselle löytyy varmasti jotain kiinnostavaa. <a href='https://helsinkifestival.fi/taiteidenyo/' target='_blank'> Lue lisää täältä!</a><br><br>Vinkkaaja: Kirsi<br> <video id='helsinki-video' width='auto' height='280' autoplay controls><source src='helsinki.mp4' type='video/mp4'> <source src='helsinki.ogg' type='video/ogg'> </video><iframe id='kartta-helsinki' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7939.17423699349!2d24.931875675355634!3d60.16759637497162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bcc09e823b9%3A0x488a82112b36ba33!2sKeskusta%2C%2000100%20Helsinki!5e0!3m2!1sfi!2sfi!4v1714896328544!5m2!1sfi!2sfi' width='320' height='280' style='border:1px solid black;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
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