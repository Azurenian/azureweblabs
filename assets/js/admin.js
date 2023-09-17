

function showProducts() {
    document.getElementById("news").style.display = "none";
    document.getElementById("products").style.display = "block";

    document.getElementById("btnnews").style.background = "rgb(14,14,14)";
    document.getElementById("btnnews").style.color = "white";
    document.getElementById("btnnews").style.borderStyle = "none";

    document.getElementById("btnproducts").style.background = "rgb(208,208,208)";
    document.getElementById("btnproducts").style.borderColor = "rgb(208,208,208)";
    document.getElementById("btnproducts").style.borderStyle = "solid";
    document.getElementById("btnproducts").style.borderWidth = "1px";
    document.getElementById("btnproducts").style.color = "black";
}

function showNews() {
    document.getElementById("products").style.display = "none";
    document.getElementById("news").style.display = "block";

    document.getElementById("btnproducts").style.background = "rgb(14,14,14)";
    document.getElementById("btnproducts").style.color = "white";
    document.getElementById("btnproducts").style.borderStyle = "none";

    document.getElementById("btnnews").style.background = "rgb(208,208,208)";
    document.getElementById("btnnews").style.borderColor = "rgb(208,208,208)";
    document.getElementById("btnnews").style.borderStyle = "solid";
    document.getElementById("btnnews").style.borderWidth = "1px";
    document.getElementById("btnnews").style.color = "black";
}

let btnp = document.getElementById("btnproducts");
btnp.onclick = function() {
    showProducts();
};


let btnn = document.getElementById("btnnews");
btnn.onclick = function() {
    showNews();
};