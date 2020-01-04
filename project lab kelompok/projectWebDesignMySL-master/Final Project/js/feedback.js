

// var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
var buttonSubmit = document.getElementById('button')

buttonSubmit.addEventListener('click',(e)=>{
    var name = document.getElementById('name').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    if ( name.length < 5 || name.length > 25) {
        alert("Name length must 5..25 characters");
        e.preventDefault();
    } else if ( !IsValidEmail(email) ) {
        e.preventDefault();
    }else if (form.inputfield.value == "") {
        alert("Message must not be empty!");
        form.inputfield.focus();
    } 
    else {
        alert("Thank you for the feedback 😊");
        return true;
    }
},false)
   

function IsValidEmail(email) {
    var len = email.length;
    var cAt = 0;
    var cDot = 0;
    var state=0;
    for (var i=0;i<len;i++){
        if (email.charAt(i)==='@'){
            cAt++;
        }
        if (email.charAt(i)==='.'){
            cDot++;
        }
        if ( i+1 < len && (email.charAt(i)==='@' && email.charAt(i+1)==='.')|| (email.charAt(i)==='.' && email.charAt(i+1)==='@')){
            state=1;
        }
        if ( i+1<len && email.charAt(i)==='.' && email.charAt(i+1)==='.'){
            state=2;
        }
        
    }

    if (cAt!==1) {
        alert("Email Wrong! @ must be one!");
        return false;
    }

    if (cDot<1){
        alert("Email Wrong! . at least one!");
        return false;
    }

    if (state===1){
        alert("Email Wrong! Cannot have ‘@’ and ‘.’ positioned together");
        return false;
    }
    if (state===2){
        alert("Email Wrong! Cannot have ‘.’ positioned together");
        return false;
    }
  
    if (email.startsWith('@') || email.startsWith('.')){
        alert("Email must not start with @ or . !");
        return false;
    }
    return true;
};
