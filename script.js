
let container = document.querySelector(".container"),
    getInput = container.querySelector(".field #message"),
    getBtn = container.querySelector(".field .code-btn"),
    resetBtn = container.querySelector(".field .reset-btn");

let qrImg = container.querySelector(".qr img");


getBtn.addEventListener('click', () => {
    let inputVale = getInput.value;
    if (!inputVale) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVale}`;
    container.classList.add("active");
})



resetBtn.addEventListener('click', () => {
    getInput.value = null;
})
