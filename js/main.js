let password1 = document.getElementById('my-input');

let button1 = document.getElementById('my-button');

function ShowHide () {

    if (password1.type === 'password') {

        password1.type = 'text'

        button1.innerHTML = 'Hide'
     
    }
    else {
        password1.type = 'password'

        button1.innerHTML = 'Unhide'
    }
}