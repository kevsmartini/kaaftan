const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');
const links = navUl.querySelectorAll('a');

hamburger.addEventListener('click', () =>{
    navUl.classList.toggle('show');
});

links.forEach(link =>{
    link.addEventListener('click', () => {
navUl.classList.toggle('show');
    });
});