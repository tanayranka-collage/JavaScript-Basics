
const setButton = document.getElementById("butt1");
const removeButton = document.getElementById("butt2");


function setCookie() {

    document.cookie = "username=user123";
    alert("Cookie Set.");
}

function removeCookie() {
    document.cookie = "username=; max-age=0; path=/";
    alert("Cookie removed.");
}

setButton.addEventListener("click", setCookie);
removeButton.addEventListener("click", removeCookie);
