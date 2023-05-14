// Está em english para estudo de progamming
const putChangeTheme = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const themeSwitchButtonImage = document.querySelector(".imagem-botao");

themeSwitchButtonImage.addEventListener("click", () => {
    const darkModeAtive = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if(darkModeAtive){
        themeSwitchButtonImage.setAttribute("src", "img/sun.png");
    }else{
        themeSwitchButtonImage.setAttribute("src", "img/moon.png");
    }

});

