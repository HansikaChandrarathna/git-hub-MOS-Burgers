const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.showcase-top-links a').forEach(link => {
    if (link.href.includes(`${activePage})`)) {
        link.classList.add('.showcase-top-links a')
    }
})