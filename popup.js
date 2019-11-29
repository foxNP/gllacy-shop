var link = document.querySelector(".link-feedback");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var blackout = document.querySelector(".overlay");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    blackout.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    blackout.classList.remove("modal-show");
});


blackout.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    blackout.classList.remove("modal-show");
});