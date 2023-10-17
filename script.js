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

let playerCardsVisible = true; // Track the visibility state of player cards

function togglePlayerCards() {
    var downloadCard = document.getElementById('download-card');
    var aboutUsCard = document.getElementById('about-us-card');
    var signupCard = document.getElementById('signup-card');

    if (playerCardsVisible) {
        downloadCard.style.display = 'none';
        aboutUsCard.style.display = 'none';
        signupCard.style.display = 'block';
    } else {
        downloadCard.style.display = 'block';
        aboutUsCard.style.display = 'block';
        signupCard.style.display = 'block';
    }

    playerCardsVisible = !playerCardsVisible; // Toggle the visibility state
}

document.addEventListener("DOMContentLoaded", function() {
    const fadeDiv = document.getElementById("scroll-fade");
    const fadeHeight = 0; // Set to 0 to start fading immediately

    // Update the fading effect when the page is scrolled
    window.addEventListener("scroll", function() {
        const scrolled = window.scrollY;
        fadeDiv.style.height = (scrolled > fadeHeight) ? "10%" : "0%";
    });
});

function Fortnite() {
    window.open('https://www.epicgames.com/fortnite/', '_blank');
}

function menuToggle() {
    var downloadCard = document.getElementById('download-card');
    var aboutUsCard = document.getElementById('about-us-card');
    var signupCard = document.getElementById('signup-card');

    if (playerCardsVisible) {
        setTimeout(function() {
        downloadCard.style.display = 'none';
        aboutUsCard.style.display = 'none';
        signupCard.style.display = 'none';
    }, 270);
    } else {
        setTimeout(function() {
        downloadCard.style.display = 'block';
        aboutUsCard.style.display = 'block';
        signupCard.style.display = 'block';
    }, 240);
    }

    playerCardsVisible = !playerCardsVisible; // Toggle the visibility state
}