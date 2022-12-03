const btnEl = document.querySelector("#btn");
const password_counterEl = document.querySelector(".password_counter");
const inputEl = document.querySelector("#input");
const copyImgEl = document.querySelector(".fa-copy");
const alert_containerEl = document.querySelector(".alert_container");

btnEl.addEventListener("click", ()=> {
    generatePassword();
    copyImgEl.classList.remove("hide");
});

copyImgEl.addEventListener("click", ()=> {
    if(inputEl.value) {
        copyPassword();
        alert_containerEl.classList.remove("active");

        setTimeout(() => {
            alert_containerEl.classList.add("active");
        }, 2000)
    }
});

function generatePassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = password_counterEl.value;
    let password = "";

    for(let i = 0; i < passwordLength; i++) {
        const randomNumb = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumb, randomNumb + 1); 
    }
    inputEl.value = password;
}

function copyPassword() {
    navigator.clipboard.writeText(inputEl.value);
    alert_containerEl.innerText = inputEl.value + " Copied";
}