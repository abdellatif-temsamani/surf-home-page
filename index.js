const search = document.getElementById("search");
const engine = "search.brave.com";

const beBrave = () => {
    if (search.value != "") {
        window.location = "https://" + engine + "/search?q=" + search.value;
    }
};

document.getElementById("btn").addEventListener("click", beBrave);
search.addEventListener("keypress", keyboardHandler);
document.addEventListener("keydown", keyboardHandler);

function keyboardHandler(e) {
    console.log(e)
    if (e.code == "Enter") {
        window.location = "https://" + engine + "/search?q=" + search.value;
    } else if (e.code === "KeyS") {
        search.focus();
    }
}
