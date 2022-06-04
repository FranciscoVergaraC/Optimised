let login = document.getElementById('LoginButton');
let fvc = document.getElementById('fvc');
let aboutus = document.getElementById('aboutus');
let homeimg = document.getElementById('image-container')

login.onclick = function () {
    window.location.assign("../Modulo Login/login.html");
}

homeimg.onclick = function () {
    window.location.assign("./index.html");
}

aboutus.onclick = function () {
    window.location.assign("./aboutus.html");
}

fvc.onclick = function () {
    window.location.assign("https://www.linkedin.com/in/francisco-vergara-cruz-48425743/");
}