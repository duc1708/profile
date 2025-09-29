document.addEventListener("DOMContentLoaded", function() {
    var username = "khanh-pham-45688b275";

    var card = document.getElementById("profile-linked");
    var linkEl = document.getElementById("linkedin-btn");

    if (!username || username.trim() === "" || username === "�") {
        if (card) card.style.display = "none";
        return;
    }

    var linkProfile = "https://www.linkedin.com/in/" + username;
    // var profileIOS = "linkedin://in/" + username;

    // var ua = navigator.userAgent || navigator.vendor || window.opera;
    // var isAndroid = /Android/i.test(ua);
    // var isIOS = /iPhone|iPad|iPod/i.test(ua);

    linkEl.setAttribute("href", profileWeb);

    linkEl.addEventListener("click", function(e) {
        window.location = linkProfile;
    });
});