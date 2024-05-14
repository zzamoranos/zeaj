const burgerButton = document.getElementById("burger-menu-btn")
const burgerLinks = document.getElementById("burger-links")

let burgerOpen = false

burgerButton.addEventListener("click", () => {
    if (!burgerOpen) {
        burgerLinks.style.display = "block"
        burgerOpen = true
    }

    else {
        burgerLinks.style.display = "none"
        burgerOpen = false
    }
})
