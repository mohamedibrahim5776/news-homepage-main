function showMenu () {
    nav.style.display = 'block'
    opacity.style.display = 'block'
}
let myNav = document.getElementById("nav")
let navCLose = c=document.querySelector('.close')
navCLose.onclick = function () {
    myNav.style.display = 'none'
    opacity.style.display = 'none'
    console.log("ok")
}
