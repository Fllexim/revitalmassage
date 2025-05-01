document.addEventListener("DOMContentLoaded", function() {
    fetch("https://fllexim.github.io/revitalmassage")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});
