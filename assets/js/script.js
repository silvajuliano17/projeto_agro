function menuShow(){
    let menuMobile= document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src="assets/img/menu_white_36dp.svg";
    }
    else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src="assets/img/close_white_36dp.svg";
    }
}

/*slide show*/
let contador = 1;
setInterval(function(){
document.getElementById("slide"+contador).checked =true;
contador ++;

if( contador >5){
    contador =1;
}
}, 3000)