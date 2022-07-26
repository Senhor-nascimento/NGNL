const toTop = document.querySelector(".btnScrollToTop");

window.addEventListener("scroll", () => {
    if (window.pageXOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})