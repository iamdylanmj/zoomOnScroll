const banner = document.querySelector(".banner-sec");
const nav = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {

    //* changing the nav bar background color when scrolling 
    if(window.scrollY > 250 ) {
        console.log("this happens");
        nav.classList.add("nav-bar-2");
    } else {
        nav.classList.remove("nav-bar-2");
    }

    //* zooming in when scrolling
    // banner.style.backgroundSize = `${120 + scrollY / 0.5 * 0.1}%`;
    banner.style.backgroundSize = `${110 + scrollY * 0.1}%`;

    
    //* bluring the banner image when scrolling
    // banner.style.filter = `blur(${scrollY * 0.01}px)`;  
});