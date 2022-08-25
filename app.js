function loadCSS(filename) {
    var file = document.createElement("link");
    file.setAttribute("rel", "stylesheet");
    file.setAttribute("type", "text/css");
    file.setAttribute("href", filename);
    document.head.appendChild(file);
}

loadCSS("https://raw.githubusercontent.com/Ironman4x4USA/dealertemplate/main/stylesheet.css");

function loadHTML() {
    fetch('https://raw.githubusercontent.com/Ironman4x4USA/dealertemplate/main/im4x4dealertemplate.html')
        .then(response => response.text())
        .then(text => document.getElementById('ironman4x4').innerHTML = text);
}
loadHTML();