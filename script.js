document.addEventListener("DOMContentLoaded", function() {
    var username = "khanh-pham-45688b275";
    var card = document.getElementById("profile-linked");
    var linkEl = document.getElementById("linkedin-btn");

    if (!username || username.trim() === "" || username === "�") {
        if (card) card.style.display = "none";
        return;
    }

    var profileWeb = "https://www.linkedin.com/in/" + username;
    var profileIOS = "linkedin://in/" + username;
    var profileAndroid =
        "intent://in/" + username +
        "#Intent;package=com.linkedin.android;scheme=https;end";

    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isAndroid = /Android/i.test(ua);
    var isIOS = /iPhone|iPad|iPod/i.test(ua);


    linkEl.setAttribute("href", profileWeb);

    linkEl.addEventListener("click", function(e) {
        e.preventDefault();

        if (isIOS) {
            // iOS → thử mở app bằng iframe
            var iframe = document.createElement("iframe");
            iframe.style.display = "none";
            iframe.src = profileIOS;
            document.body.appendChild(iframe);

            setTimeout(function() {
                window.location = profileWeb;
            }, 1500);
        } else if (isAndroid) {
            // Android → thử mở app, nếu thất bại thì fallback sau 1s
            var start = Date.now();
            window.location = profileAndroid;

            setTimeout(function() {
                if (Date.now() - start < 1200) {
                    window.location = profileWeb;
                }
            }, 1000);
        } else {
            window.location = profileWeb;
        }
    });
});