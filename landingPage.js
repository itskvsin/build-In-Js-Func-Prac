const section = document.querySelectorAll("section")

window.addEventListener("scroll" , () => {
    section.forEach(sec => {
        const top = window.scrollY
        const offset = sec.offsetTop - 100
        const height = sec.offsetHeight
    
        if (top >= offset && top < offset + height ) {
            sec.classList.add("show-animate")
        } else {
            sec.classList.remove("show-animate")
        }
    
    });
})