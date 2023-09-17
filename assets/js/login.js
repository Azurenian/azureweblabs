
let adminname = "admin";
let adminpass = "admin";

function adminCheck() {
    let inputname = document.getElementById("username").value;
    if (inputname == adminname) {
        return true;
    }
    else {
        return false;
    }
};

function passCheck() {
    let inputpass = document.getElementById("pass").value;
    if (inputpass == adminpass) {
        return true;
    }
    else {
        return false;
    }
};


let btns = document.getElementById("submit");
btns.onclick = function() {
    adminCheck()
    passCheck()

    if (adminCheck() && passCheck() == true) {
        alert('Welcome, Admin');
        window.location.href = "adminpg/indexadmin.html";
    }
    else {
        alert('Invalid Username or Password');
    }
};