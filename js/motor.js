let motorNav = document.getElementById('motors-nav');

let openHam = document.getElementById('filter')
let closedHam = document.getElementById('aligner')

function OpenMotors(){
    openHam.style.visibility ='hidden'
    closedHam.style.visibility = 'visible'
    motorNav.style.left = '0px'
}

function CloseMotors(){
    closedHam.style.visibility = 'hidden'
    openHam.style.visibility ='visible'
    motorNav.style.left = '-1000px'
}

function CheckScreen(){
    const screenWidth = window.screen.width;

    if(screenWidth > 630){
        closedHam.style.visibility = 'hidden'
        openHam.style.visibility ='hidden'
    }
    if(screenWidth < 630){

        if(motorNav.style.left === '0px'){
            closedHam.style.visibility = 'visible'
        }else{
            openHam.style.visibility ='visible'
        }
       
        
    }
}

CheckScreen();

window.addEventListener('resize', CheckScreen);