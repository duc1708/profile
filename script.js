document.addEventListener("DOMContentLoaded", function() {
    var username = "khanh-pham-45688b275";
    var card = document.getElementById("profile-linked");
    var linkEl = document.getElementById("linkedin-btn");

    if (!username || username.trim() === "" || username === "�") {
        if (card) card.style.display = "none";
        return;
    }

    var profileWeb = "https://www.linkedin.com/in/" + username;
    var profileApp = "linkedin://in/" + username;

    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isMobile = /Android|iPhone|iPad|iPod/i.test(ua);

    // tránh mở web ngay lập tức
    linkEl.setAttribute("href", "#");

    linkEl.addEventListener("click", function(e) {
        e.preventDefault();

        if (isMobile) {
            var start = Date.now();
            window.location = profileApp;

            setTimeout(function() {
                if (Date.now() - start < 1200) {
                    window.location = profileWeb;
                }
            }, 1000);
        } else {
            window.open(profileWeb, "_blank");
        }
    });
});
