function toggleMode() {
    // header
    document.querySelector("body").classList.toggle("body-dark");
    document.querySelector("body").classList.toggle("body-light");

    // header
    document.querySelector("header").classList.toggle("header-dark");
    document.querySelector("header").classList.toggle("header-light");

    // main
    document.querySelector("main").classList.toggle("main-dark");
    document.querySelector("main").classList.toggle("main-light");

    // button
    const button = document.querySelector("button");
    button.classList.toggle("button-dark");
    button.classList.toggle("button-light");
    if (button.childNodes[1].innerText === "Dark Mode") {
        button.childNodes[1].innerText = "Light Mode";
    } else {
        button.childNodes[1].innerText = "Dark Mode";
    }

    // box
    const boxes = document.querySelectorAll("div");
    for (let element of boxes) {
        element.classList.toggle("box-dark");
        element.classList.toggle("box-light");
    }

    // text
    const words = document.querySelectorAll("h1, p");
    for (let element of words) {
        element.classList.toggle("text-dark");
        element.classList.toggle("text-light");
    }
}

const button = document.querySelector("#mode-button");

button.addEventListener("click", toggleMode);