// ------ MENU HAMBURGUESA ------ //
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-navegacion')

/* console.log(menu)
console.log(menuNav) */

menu.addEventListener('click', ()=>{
    menuNav.classList.toggle("spread")
})
window.addEventListener('click',  o => {
    if(menuNav.classList.contains('spread')
        && o.target != menuNav && o.target !=menu ){
            menuNav.classList.toggle("spread") 
    }
})

