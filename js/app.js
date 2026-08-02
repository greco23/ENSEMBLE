const register = document.querySelector("#register")

const login = document.querySelector("#login")

const start = document.querySelector("#hero-start")

const modalRegister = document.querySelector("#modal-register")
const modalLogin = document.querySelector("#modal-login")

const modalCloseLogin = document.querySelector("#modal-close-login")
const modalCloseRegister = document.querySelector("#modal-close-register")

const formRegister = document.querySelector("#form_register")

const modalProject = document.querySelector("#modal-project")
const newProject = document.querySelector("#open-project-modal")




if(start) {
    start.addEventListener("click", function(e) {
    e.preventDefault()
    modalLogin.classList.add("active")
});
}

if (register) {
    register.addEventListener("click", function(e) {
        e.preventDefault();
        modalRegister.classList.add("active");
    });
}
 
if(login) {
login.addEventListener("click", function(e) {
    e.preventDefault()
    modalLogin.classList.add("active")
});
}

/* CERRAR MODAL CON LA "X"*/
if(modalCloseLogin) {
modalCloseLogin.addEventListener("click", function(e) {
    e.preventDefault()
    modalLogin.classList.remove("active")
});
}

if(modalCloseRegister) {
modalCloseRegister.addEventListener("click", function(e) {
    e.preventDefault()
    modalRegister.classList.remove("active")
});
}

/* ENVIAR FORM */

if(formRegister){
formRegister.addEventListener("submit", function(e) {
           e.preventDefault()
           const userName = document.querySelector("#nombre-register").value
           const userLastname = document.querySelector("#apellido-register").value
           const userBday = document.querySelector("#fecha-nacimiento-register").value
           const userEmail = document.querySelector("#email-register").value
           const userPassword = document.querySelector("#password-register").value
           
          const profileData = { name: userName, lastName: userLastname, birthDate: userBday, email : userEmail , password : userPassword}
        
           const profileInfo = JSON.stringify(profileData)
           localStorage.setItem("perfil", perfilInfo)
    window.location.href = "pages/proyectos.html"
});
}

/* CERRAR MODAL CON EL FONDO */

if(modalRegister){
modalRegister.addEventListener("click", function(e) {
    if (e.target === e.currentTarget) {
        modalRegister.classList.remove("active")
    }
});
}

if(modalLogin){
modalLogin.addEventListener("click", function(e) {
    if (e.target === e.currentTarget) {
        modalLogin.classList.remove("active")
    }
});
}

/* YA REGISTRADO */

const logged = document.querySelector("#alreadyLogged")

if(logged){
logged.addEventListener("click", function(e) {
    e.preventDefault()
    modalRegister.classList.remove("active")
    modalLogin.classList.add("active")
});
}

const unregistered = document.querySelector("#notRegister")

if(unregistered){
unregistered.addEventListener("click", function(e) {
    e.preventDefault()
    modalLogin.classList.remove("active")
    modalRegister.classList.add("active")
});
}

/* CREAR NUEVO PROYECTO */

newProject.addEventListener("click", function(e) {
    e.preventDefault()

        console.log("Click");

    modalProject.classList.add("active")

        console.log(modalProject.classList);

})

