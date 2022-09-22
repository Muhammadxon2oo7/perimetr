const screenEl = document.getElementById("screen")
const resultEl = document.getElementById("result")
const ShowResulEl = document.getElementById("gooey-button")
const createBtnEl = document.getElementById("create-btn")
const height=Number(prompt("balandligi:"))
const width=Number(prompt("uzunligi:"))
const perimetr = (h, w) => 2*(h + w);
let result = perimetr(height, width);
ShowResulEl.addEventListener('click', () => {
    createBtnEl.style.display = "block"
    ShowResulEl.style.display = "none"
    createBtnEl.style.width = width+'px';
    createBtnEl.style.height = height+'px';
    resultEl.innerText = result;
});