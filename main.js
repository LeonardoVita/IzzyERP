   
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh',`${vh}px`);

window.addEventListener('resize', () => {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log("resized")
});

const out = document.querySelector('#sai-home');
const on = document.querySelector('#volta-home');
const on2 = document.querySelector('#volta-home-logo'); 
const on3 = document.querySelector('#volta-home-portrait');

out.addEventListener('click', sai);
on.addEventListener('click', entra);
on2.addEventListener('click', entra);
on3.addEventListener('click', entra);

function sai() {
    const frente = document.querySelector('.IzzyERP-Home');
    frente.classList.add('out')
}

function entra() {
    const frente = document.querySelector('.IzzyERP-Home');
    frente.classList.remove('out')
}


function showGallery(moduleType){
    const gallery = document.querySelector(moduleType);
    gallery.classList.add('show')           
}

function exitGallery(moduleType){
    const gallery = document.querySelector(moduleType);
    gallery.classList.remove('show') 
}