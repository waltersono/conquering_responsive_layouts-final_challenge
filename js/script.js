const btnNav = document.querySelector('#btnNav');


btnNav.addEventListener('click', () => {

    const navList = document.querySelector('#navList');

    navList.classList.toggle('nav__list--show');
});