
let adminname = "admin";
let adminpass = "admin";

let stuname = "student1";
let stupass = "1234";

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

function stuCheck() {
    let inputname = document.getElementById("username").value;
    if (inputname == stuname) {
        return true;
    }
    else {
        return false;
    }
};

function stupassCheck() {
    let inputpass = document.getElementById("pass").value;
    if (inputpass == stupass) {
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
        alert('Welcome, Administrator');
        window.location.href = "adminpg/indexadmin.html";
    }

    else if (stuCheck() && stupassCheck() == true) {
        alert('Welcome, student1');
        window.location.href = "userpg/indexuser.html";
    }
    
    else {
        document.getElementById("invalidlogin").style.display = "block";
        document.getElementById("username").style.borderColor = "red";
        document.getElementById("pass").style.borderColor = "red";
    }
};
