const burger = document.querySelector('#burger');
const navlinks = document.querySelector('#navlinks');

burger.addEventListener('click', () => {
    if (navlinks.classList.contains('hidden')) {
        navlinks.classList.remove('hidden');
    } else {
        navlinks.classList.add('hidden');
    }
})