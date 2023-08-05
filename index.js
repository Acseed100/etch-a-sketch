
function randomNumber() {
    let number = Math.floor(Math.random() * 255);
    return number;
}

function rgb() {
    const r = randomNumber();
    console.log(r);
    const g = randomNumber();
    console.log(g);
    const b = randomNumber();
    console.log(b);
    return `background-color: rgb(${r}, ${g}, ${b})`;
}

const container = document.querySelector('.container');

function createTable() {
    for (let i = 0; i < 256; i++) {
        const createDiv = document.createElement("div");
        createDiv.classList.add("div");
        createDiv.style.cssText = "background-color: white;";
        createDiv.addEventListener("mouseover", () => {
            createDiv.style.cssText = "background-color:red;"
        });
        createDiv.addEventListener("click", () => {
            createDiv.style.cssText = `${rgb()}`;
        });
        container.appendChild(createDiv);

    }
}
createTable();

function recreateTable() {
    let ratio = prompt("How many squares per line do you wish? (max 100)");
    if (ratio > 100) alert("Try again lol");
    else
        container.style.gridTemplateColumns = `repeat(${ratio}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${ratio}, 1fr)`;
    container.innerHTML = "";
    for (let i = 0; i < (ratio * ratio); i++) {
        const createDiv = document.createElement("div");
        createDiv.classList.add("div");
        createDiv.style.cssText = "background-color: white;";
        createDiv.addEventListener("mouseover", () => {
            createDiv.style.cssText = "background-color:red;"
        });

        createDiv.addEventListener("click", () => {
            createDiv.style.cssText = `${rgb()}`;
        });
        container.appendChild(createDiv);
    }
}
