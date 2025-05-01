document.addEventListener("DOMContentLoaded", function() {
    fetch("https://fllexim.github.io/revitalmassage/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});
