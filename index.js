const button = document.getElementById("open")
const blur   = document.getElementById('blur');
const modal = document.querySelector('.modal-overlay')
const button1 = document.getElementById("close")

button.addEventListener("click", ()=>{
    blur.classList.add('active');
    modal.classList.add('open-modal')
})
button1.addEventListener("click", ()=>{
    modal.classList.remove('open-modal')
    blur.classList.remove('active');
})
