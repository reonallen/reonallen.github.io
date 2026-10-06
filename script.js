// Script to handle scroll effect and button click
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');

    if (window.scrollY > 100) {
        document.body.classList.add('minimized');
    } else {
        document.body.classList.remove('minimized');
    }
});

document.querySelector('.scroll-button').addEventListener('click', function() {
    window.scrollTo({
        top: document.querySelector('#about').offsetTop,
        behavior: 'smooth'
    });
});