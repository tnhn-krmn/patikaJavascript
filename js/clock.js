let fullName = prompt("Lütfen adınızı giriniz")
let html = document.querySelector("#myName")

html.innerHTML = `${html.innerHTML} <smal style = "color:white;">${fullName}</smal>`


let today = new Date();
let date = today.getDay() + ":" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();