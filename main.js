const closeBtn = document.querySelector('.close-btn button')
const closeDiv = document.querySelector('.close-btn')
const openBtn = document.querySelector('.open-btn button')
const openDiv = document.querySelector('.open-btn')
const nav = document.querySelector('nav')

openBtn.addEventListener('click', function(){
    openDiv.style.display = "none"
    closeDiv.style.display = "block"
    nav.style.display = "block"
    
})


closeBtn.addEventListener('click', function(){
    closeDiv.style.display = "none"
    openDiv.style.display = "block"
    nav.style.display = "none"
    
})
