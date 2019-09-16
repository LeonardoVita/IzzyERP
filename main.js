
// let vh = screen.height * 0.01;
// document.documentElement.style.setProperty('--vh',`${vh}px`);

// window.addEventListener('resize', () => {

//     let vh = screen.height * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);

// });

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


function showGallery(moduleType) {
    const gallery = document.querySelector(moduleType);
    gallery.classList.add('show')
}

function exitGallery(moduleType) {
    const gallery = document.querySelector(moduleType);
    gallery.classList.remove('show')
}

$(".carousel").on("touchstart", function (event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function (event) {
        var xMove = event.originalEvent.touches[0].pageX;
        if (Math.floor(xClick - xMove) > 5) {
            $(this).carousel('next');
        }
        else if (Math.floor(xClick - xMove) < -5) {
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function () {
        $(this).off("touchmove");
    });
});