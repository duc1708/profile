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

    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isAndroid = /Android/i.test(ua);
    var isIOS = /iPhone|iPad|iPod/i.test(ua);

    linkEl.setAttribute("href", profileWeb);

    linkEl.addEventListener("click", function(e) {
        e.preventDefault();

        if (isIOS) {
            var iframe = document.createElement("iframe");
            iframe.style.display = "none";
            iframe.src = profileIOS;
            document.body.appendChild(iframe);

            setTimeout(function() {
                window.location = profileWeb;
            }, 1500);
        } else if (isAndroid) {
            window.location = profileWeb;
           
        } else {
            window.open(profileWeb, "_blank");
        }
    });
});