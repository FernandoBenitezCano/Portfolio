let divFecha = document.getElementById("fecha");
let divRegistro = document.getElementById("registro");
let divMensaje = document.getElementById("mensaje");
let divGame = document.getElementById("game");
let divNotas = document.getElementById("inDB");
let divApi = document.getElementById("api");
let divReproductor = document.getElementById("reproductor");
let cineProyecto = document.getElementById("cine");
let elementName = document.getElementById("nombre");
let elementEmail = document.getElementById("correo");
let elementNumtel = document.getElementById("telefono");
let elementDesc = document.getElementById("comentario");
let elementSubmit = document.getElementById("submit");
let errorName = document.getElementById("errorNom");
let errorEmail = document.getElementById("errorEm");
let errorTelefono = document.getElementById("errorTel");
let errorDesc = document.getElementById("errorCom");


let colorInvalid = "4px solid red";
let colorValid = "4px solid green";

let nameValid = false;
let numtelValid = false;
let emailValid = false;
let descValid = false;
let regexName = /[a-zA-Z ]{4,20}/;
let regexNumTel = /^[679]\d{8}$/;
let regexEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;


divFecha.addEventListener("click", () => {
    window.location.href = "https://fernandobenitezcano.github.io/ContadorFecha/";
});

divGame.addEventListener("click", () => {
    window.location.href = "https://fernandobenitezcano.github.io/PangGame/";
});

divRegistro.addEventListener("click", () => {
    window.location.href = "https://fernandobenitezcano.github.io/Registro/";
});

divMensaje.addEventListener("click", () => {
    window.location.href = "https://fernandobenitezcano.github.io/CodificadorMensajes/";
});

divNotas.addEventListener("click", () => {
    window.location.href = "https://fernandobenitezcano.github.io/NotasBD/";
});

divApi.addEventListener("click", () => {
    window.location.href = "https://fernandobenitezcano.github.io/apiValorantV2/";
});

divReproductor.addEventListener("click", () => {
    window.location.href = "https://fernandobenitezcano.github.io/ReproductorMusica/";
});

cineProyecto.addEventListener("click", () => {
    window.location.href = "https://fernandobenitezcano.github.io/cineApp/";
});





elementName.addEventListener("blur", validateName);
elementNumtel.addEventListener("blur", validateTel);
elementEmail.addEventListener("blur", validateEmail);
elementDesc.addEventListener("blur", validateDesc);

function checkFullForm() {
    if (nameValid && emailValid && numtelValid && descValid) {
        elementSubmit.removeAttribute("disabled");
    } else {
        elementSubmit.setAttribute("disabled", "disabled");
    }
}

function validateName() {
    nameValid = regexName.test(elementName.value);

    if (!nameValid) {
        elementName.style.border = colorInvalid;
        errorName.classList.remove("hide");
    } else {
        elementName.style.border = colorValid;
        errorName.classList.add("hide");
    }

    checkFullForm();
}

function validateTel() {
    let cleanedNumber = elementNumtel.value.replace(/\D/g, ''); // Elimina espacios en blanco y no dígitos
    numtelValid = regexNumTel.test(cleanedNumber);

    if (!numtelValid) {
        elementNumtel.style.border = colorInvalid;
        errorTelefono.classList.remove("hide");
    } else {
        elementNumtel.style.border = colorValid;
        errorTelefono.classList.add("hide");
    }

    checkFullForm();
}

function validateEmail() {
    emailValid = regexEmail.test(elementEmail.value);

    if (!emailValid) {
        elementEmail.style.border = colorInvalid;
        errorEmail.classList.remove("hide");
    } else {
        elementEmail.style.border = colorValid;
        errorEmail.classList.add("hide");
    }

    checkFullForm();
}

function validateDesc() {
    if (elementDesc.value.trim() === "") {
        descValid = false;
        elementDesc.style.border = colorInvalid;
        errorDesc.classList.remove("hide");
    } else {
        descValid = true;
        elementDesc.style.border = colorValid;
        errorDesc.classList.add("hide");
    }

    checkFullForm();
}

