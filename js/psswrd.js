


function ConfirmPass() {
    let circle = document.getElementByClassName('bi-check-circle');
    let pass1 = document.getElementById('turn1').value;
    let pass2 = document.getElementById('turn2').value;
    if (pass2 === pass1) {
         circle.visibility = "visible"
         circle.color = "green"
         
         circle.style.color = "green"
         circle.style.visibility = "visible"
         circle.
    }
    else if (pass1 !==pass2 || pass2 !==pass1){
        alert("not matched")
        
    }
    }
