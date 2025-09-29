document.addEventListener("DOMContentLoaded", function() {
    var username = "khanh-pham-45688b275";
    var card = document.getElementById("profile-linked");
    var linkEl = document.getElementById("linkedin-btn");

    if (!username || username.trim() === "" || username === "�") {
        if (card) card.style.display = "none";
        return;
    }

    var profileWeb = "https://www.linkedin.com/in/" + username;
    var profileApp = "linkedin://in/" + username; // dùng chung cho iOS & Android

    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isAndroid = /Android/i.test(ua);
    var isIOS = /iPhone|iPad|iPod/i.test(ua);

    linkEl.setAttribute("href", profileWeb);

    linkEl.addEventListener("click", function(e) {
        e.preventDefault();

        if (isIOS || isAndroid) {
            // thử mở app
            var start = Date.now();
            window.location = profileApp;

            setTimeout(function() {
                // nếu trong ~1.2s chưa mở app thì fallback về web
                if (Date.now() - start < 1200) {
                    window.location = profileWeb;
                }
            }, 1000);
        } else {
            // desktop → mở web luôn
            window.open(profileWeb, "_blank");
        }
    });
});
