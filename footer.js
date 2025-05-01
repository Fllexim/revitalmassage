document.addEventListener("DOMContentLoaded", function() {
    fetch("https://revital-massage.local/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});
