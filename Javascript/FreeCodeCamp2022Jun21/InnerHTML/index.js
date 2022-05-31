

const container = document.getElementById("container-el");

container.innerHTML = "<button onclick='buy()'>BUY!</button>"

function buy(){
    container.innerHTML += "<p>Thank you buying<p>";
}