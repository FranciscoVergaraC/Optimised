let login = document.getElementById('LoginButton');
let fvc = document.getElementById('fvc');
let aboutus = document.getElementById('aboutus');
let homeimg = document.getElementById('image-container');
let contactus = document.getElementById('contactus');
const contactform = document.getElementById('contactform');
let contacts = [];

window.onload = function(){
    login.onclick = function () {
        window.location.assign("../Modulo Login/login.html");
    }
    
    homeimg.onclick = function () {
        window.location.assign("./index.html");
    }
    
    aboutus.onclick = function () {
        window.location.assign("./aboutus.html");
    }
    
    contactus.onclick = function () {
        console.log("se ingresa a flujo contact")
        window.location.assign("./contactus.html");
    }

    //fvc.onclick = function () {
      //  window.location.assign("https://www.linkedin.com/in/francisco-vergara-cruz-48425743/");
    //}

}

const sendContact = (ev) => {
    ev.preventDefault();
    let contact = {
        firstName: document.getElementById('first-name').value
    }
    console.log(contact)
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('SubmitButton').addEventListener('click',sendContact)
})
