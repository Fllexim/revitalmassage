document.addEventListener("DOMContentLoaded", function() {
    fetch("https://fllexim.github.io/revitalmassage/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });
});
