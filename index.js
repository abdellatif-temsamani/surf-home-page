const search = document.getElementById("search");
const btn = document.getElementById("btn");
const engine = "search.brave.com";

const beBrave = () => {
    if (search.value != "") {
        window.location = "https://" + engine + "/search?q=" + search.value;
    }
}

btn.addEventListener('click', beBrave);
search.addEventListener('return', beBrave)
