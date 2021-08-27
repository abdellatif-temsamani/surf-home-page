const today = document.getElementById("today");
const search = document.getElementById("search");
const btn = document.getElementById("btn");
const d = new Date();

const engine = "search.brave.com";
today.textContent = d.toUTCString();

function beBrave() {
    window.location = "https://" + engine + "/search?q=" + search.value;
}

btn.addEventListener('click', beBrave);


