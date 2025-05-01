document.addEventListener("DOMContentLoaded", function() {
    fetch("https://revital-massage.local/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });
});