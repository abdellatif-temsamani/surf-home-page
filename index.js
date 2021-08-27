const today = document.getElementById("today");
const search = document.getElementById("search")
const btn = document.getElementById("btn")
const d = new Date();

today.textContent = d.toUTCString()

function beBrave() {
    window.location = "https://search.brave.com/search?q=" + search.value
}

btn.addEventListener('click', beBrave);


