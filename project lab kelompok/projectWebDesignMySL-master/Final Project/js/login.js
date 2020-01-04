var form = document.getElementById('forms');
var submitButton = document.getElementById('button');
var nomorSL = document.getElementById("noSL").value;
var password = document.getElementById("password").value;

function isInputNumber(evt){
                
    var ch = (evt.which) ? evt.which : event.keyCode
    
    if((ch > 31 && (ch < 48 || ch > 57))){
        evt.preventDefault();
    }
}



submitButton.addEventListener('click',(e)=>{

    var nomorSL = document.getElementById("noSL").value;
    var password = document.getElementById("password").value;
    if (!nomorSL.startsWith("0878")) {
        alert("SL Number Must Start With 0878!");
        e.preventDefault();
        return false;
    }

    if (nomorSL.length !== 12){
        alert("SL Number Length Must 12!");
        e.preventDefault();
        return false;
    }


    if ((password.length < 5  || password.length > 25)){
        alert("Password Length Must 5-25 Character!");
        e.preventDefault();
        return false;
    }
    else{
        localStorage.setItem("slnilai",nomorSL);
        alert("Successfully Login with SL Number : " + nomorSL );
    }
},true)