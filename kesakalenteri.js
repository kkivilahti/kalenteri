let modal = document.getElementById("myModal");
let modal1 = document.getElementById("myModal1");

// Avaa pop upin
function vko1(){
    modal.style.display = "block";

    document.getElementById("sisalto").innerHTML = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor similique fugiat illo unde, repellendus eius ipsam esse quia maxime impedit magni praesentium obcaecati. Accusantium aperiam adipisci maiores voluptate temporibus vero.</p>"
}
function vko2(){
    modal1.style.display = "block";

    document.getElementById("sisalto").innerHTML = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor similique fugiat illo unde, repellendus eius ipsam esse quia maxime impedit magni praesentium obcaecati. Accusantium aperiam adipisci maiores voluptate temporibus vero.</p>"
}


let span = document.getElementsByClassName("close")[0];
let span1 = document.getElementsByClassName("close1")[0];

// Sulkee pop upin x-painikkeesta
span.onclick = function() {
    modal.style.display = "none";
}
span1.onclick = function() {
    modal1.style.display = "none";
}

// Sulkee klikatessa pop upin ulkopuolelle
window.onclick = function(event) {
if (event.target == modal || event.target == modal1) {
      modal.style.display = "none";
      modal1.style.display = "none";
    }
}
