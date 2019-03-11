//Her skal du skrive din typescriptkode
document.getElementById('submitbtn').addEventListener("click",addVare);
let elementInput = document.getElementById("nyvare");

function addVare() {
    let inputText = (<HTMLInputElement>elementInput).value;

    let listeusund = document.getElementById("listeUsund");

    let nyLi = document.createElement("li");
    let nyText = document.createTextNode(inputText);

    nyLi.appendChild(nyText);
    nyLi.setAttribute("class", "usundt");

    listeusund.appendChild(nyLi);
}