
let container = document.querySelector(".container"),
    getInput = container.querySelector(".field #message"),
    getBtn = container.querySelector(".field .code-btn");

let qrImg = container.querySelector(".qr img");


getBtn.addEventListener('click', () => {
    let inputVale = getInput.value;
    if (!inputVale) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVale}`;
    container.classList.add("active");
})


getInput.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        let inputVale = getInput.value;
        if (!inputVale) return;
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVale}`;
        container.classList.add("active");

    }
})
