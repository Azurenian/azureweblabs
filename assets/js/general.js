

let linker = document.getElementById("linkcateg");
let cater = document.getElementById("categories");

linker.onmouseover = function() {
    showCategory()
};

linker.onmouseleave = function() {
    hideCategory()
};

cater.onmouseover = function() {
    showCategory()
};

cater.onmouseleave = function() {
    hideCategory()
};

function showCategory() {
    let disp = document.getElementById("categories");
    disp.style.display = "block";
};

function hideCategory() {
    let disp2 = document.getElementById("categories");
    disp2.style.display = "none";
};