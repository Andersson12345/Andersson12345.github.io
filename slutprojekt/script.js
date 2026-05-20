let mercedes = document.getElementById("mercedes");
let bmw = document.getElementById("bmw");
let audi = document.getElementById("audi");

if (mercedes) {
mercedes.addEventListener("click", function () {
localStorage.setItem("bil", "Mercedes GT63");
window.location.href = "uppgraderingar.html";
});
}

if (bmw) {
bmw.addEventListener("click", function () {
localStorage.setItem("bil", "Bmw M4");
window.location.href = "uppgraderingar.html";
});
}

if (audi) {
audi.addEventListener("click", function () {
localStorage.setItem("bil", "Audi RS6");
window.location.href = "uppgraderingar.html";
});
}

let tillbaka = document.getElementById("tillbaka");
if (tillbaka) {
tillbaka.addEventListener("click", function () {
window.location.href = "uppgraderingar.html";
});
}

let vagn = document.getElementById("vagn");
if (vagn) {
vagn.addEventListener("click", function () {
window.location.href = "vagn.html";
});
}