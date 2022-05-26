// alert('Welcome to my website')

const topMenu = document.getElementById('nav-menu');
const toggleTopMenuIcon = document.getElementById('nav-menu-toggle');

document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('top-menu-expanded')
    } else {
        if (topMenu.classList.contains('top-menu-expanded')) {
            topMenu.classList.remove('top-menu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})