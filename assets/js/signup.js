



/* First Name */

let first = document.getElementById("fname");
first.addEventListener("focusout", fnameChecker);

function fnameChecker() {
    let fname = document.getElementById('fname').value;
    let ftester = /\d/.test(fname);
    
    if (ftester == true || fname == "") {
        document.getElementById("fname").style.borderColor = "red";
        document.getElementById("fname").style.borderWidth = "1px";
        
        return false;
        
    }

    else {
        document.getElementById("fname").style.borderColor = "green";
        document.getElementById("fname").style.borderWidth = "2px";
       
        return true;
    }

    
}

/* Last Name */

let last = document.getElementById("lname");
last.addEventListener("focusout", lnameChecker);

function lnameChecker() {
    let lname = document.getElementById('lname').value;
    let ltester = /\d/.test(lname);
    
    if (ltester == true || lname == "") {
        document.getElementById("lname").style.borderColor = "red";
        document.getElementById("lname").style.borderWidth = "1px";
       
        return false;
    }

    else {
        document.getElementById("lname").style.borderColor = "green";
        document.getElementById("lname").style.borderWidth = "2px";
        
        return true;
        
    }

    
}

/* Username */

let mid = document.getElementById("uname");
mid.addEventListener("focusout", midiChecker);


function midiChecker() {
    let midi = document.getElementById('uname').value;
    let length = midi.length;
   
    
    if (midi == "" || length > 8) {
        document.getElementById("uname").style.borderColor = "red";
        document.getElementById("uname").style.borderWidth = "1px";
        
        return false;
    }

    

    else {
        document.getElementById("uname").style.borderColor = "green";
        document.getElementById("uname").style.borderWidth = "2px";
        
        return true;
        
    }

    
}

/* Password */

let regp = document.getElementById("regpass");
regp.addEventListener("focusout", regCheck);

function regCheck() {
    let regg = document.getElementById('regpass').value;
    let length = regg.length;
    
    if (regg == "" || length < 8) {
        document.getElementById("regpass").style.borderColor = "red";
        document.getElementById("regpass").style.borderWidth = "1px";
       
        return false;
    }

    

    else {
        document.getElementById("regpass").style.borderColor = "green";
        document.getElementById("regpass").style.borderWidth = "2px";
      
        return true;
        
    }

    
}


/* Email Address */

let mail = document.getElementById("regemail");
mail.addEventListener("focusout", emailChecker);

function emailChecker() {
    let email = document.getElementById('regemail').value;
    let format = /[!#$%^&*()+\=\[\]{};':"\\|,<>\/?]+/; 
    let etester = format.test(email);
   
    if (etester == true || email.includes("@") == false) { 
        document.getElementById("regemail").style.borderColor = "red";
        document.getElementById("regemail").style.borderWidth = "1px";
       
        return false;
        
    }

    else {
        document.getElementById("regemail").style.borderColor = "green";
        document.getElementById("regemail").style.borderWidth = "2px";
       
        return true;
    }
}


/* Reset */

function resetAll() {
    document.getElementById('regemail').value = "";
    document.getElementById('uname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('fname').value = "";
    document.getElementById('regpass').value = "";

    document.getElementById("regemail").style.borderColor = "gray";
    document.getElementById("regemail").style.borderWidth = "1px";

    document.getElementById("uname").style.borderColor = "gray";
    document.getElementById("uname").style.borderWidth = "1px";

    document.getElementById("regpass").style.borderColor = "gray";
    document.getElementById("regpass").style.borderWidth = "1px";

    document.getElementById("lname").style.borderColor = "gray";
    document.getElementById("lname").style.borderWidth = "1px";

    document.getElementById("fname").style.borderColor = "gray";
    document.getElementById("fname").style.borderWidth = "1px";

  
    
}

/* Submit */

function submitBtn() {
    fnameChecker();
    lnameChecker();
    midiChecker();
    emailChecker();
    regCheck();

    if (emailChecker() == true && midiChecker() == true 
    && lnameChecker() == true && fnameChecker() == true && regCheck() == true) {
       alert('Successfully Signed Up!');
    }
    else {
       alert('One of the inputs are invalid.');
    }
}


let reset = document.getElementById("resetall");
reset.onclick = function() {
    resetAll()
};

let sign = document.getElementById("btnsign");
sign.onclick = function() {
    submitBtn()
};