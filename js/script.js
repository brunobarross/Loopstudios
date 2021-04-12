function menuMobile() {
    let tamanhoTela = window.innerWidth;
    let inptMenu = document.getElementById('inptMenu');
    let menu =  document.getElementById('menu-mobile');
    let headerMenu = document.getElementById('menu');
    let intro = document.getElementById('intro');


    if(inptMenu.checked == true && tamanhoTela < 739) {
      menu.style.display ="flex";
      menu.classList.add('animaDiv');
      inptMenu.style.transform = "rotate(90deg)";
      inptMenu.style.transition = "0.5s";
      inptMenu.style.marginBottom = "15px"
      headerMenu.classList.add('blackintro');
      headerMenu.classList.remove('menu');
      intro.style.display = "none";

    } else if (inptMenu.checked == false && tamanhoTela < 739) {
      menu.style.display="none";
      menu.classList.remove('animaDiv');
      intro.style.marginTop ="";
      inptMenu.style.transform = "rotate(0)";
      headerMenu.classList.add('menu');
      headerMenu.classList.remove('blackintro');
      intro.style.display = "block";
    } else if(tamanhoTela > 739) {
      menu.style.display="flex";
      

    }


}