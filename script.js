document.addEventListener("DOMContentLoaded", function() {
    var username = "khanh-pham-45688b275";

    var card = document.getElementById("profile-linked");
    var linkEl = document.getElementById("linkedin-btn");

    if (!username || username.trim() === "" || username === "�") {
        if (card) card.style.display = "none";
        return;
    }

    var linkProfile = "https://www.linkedin.com/in/" + username;

    linkEl.setAttribute("href", linkProfile);

    
});