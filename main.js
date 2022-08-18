const closeMenu = document.querySelector('.close')
const openMenu = document.querySelector('.menu')
const nav = document.querySelector('nav')

openMenu.addEventListener('click', function(){
    this.style.display = "none";
    closeMenu.style.display = "block";
    nav.style.display = "block";
});


closeMenu.addEventListener('click', function(){
    this.style.display = "none";
    nav.style.display = "none";
    openMenu.style.display = "block";
});
