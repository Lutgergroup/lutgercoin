function downloadFile(filePath) {
    var link = document.createElement('a');
    link.href = filePath;
    link.setAttribute('download', 'Bit-Coin.png');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function showSignupForm() {
    var form = document.getElementById("signup-form");
    var playerCard = document.querySelector(".player-card"); // Assumes the player card has a specific class

    var computedStyle = window.getComputedStyle(form);
    var formDisplay = computedStyle.getPropertyValue("display");

    if (formDisplay === "none") {
        form.style.display = "block"; // Show the form
        playerCard.style.display = "none"; // Hide the player card
    } else {
        form.style.display = "none"; // Hide the form
        playerCard.style.display = "block"; // Show the player card
    }
}
