window.addEventListener('load', loaded, false);

function loaded() {
    const spin1 = document.getElementById('spin1');
    const spin2 = document.getElementById('spin2');
    const spin3 = document.getElementById('spin3');
    const cover1 = document.getElementById('cover1');
    const cover2 = document.getElementById('cover2');
    const cover3 = document.getElementById('cover3');
    const cont2 = document.getElementById('cont2');

    const image2Cont = document.getElementById('image2-cont');
    spin1.onclick = function() {
        if (spin1.style.rotate == '90deg') {
            spin1.style.rotate = '0deg';
            cover1.style.width = '100%';
        } else {
            spin1.style.rotate = '90deg';
            cover1.style.width = '0%';
        }
    }
    spin2.onclick = function() {
        if (spin2.style.rotate == '90deg') {
            spin2.style.rotate = '0deg';
            cover2.style.width = '100%';
            image2Cont.style.height = '0px';
            cont2.style.marginBottom = '120px';
        } else {
            spin2.style.rotate = '90deg';
            cover2.style.width = '0%';
            image2Cont.style.height = '450px';
            cont2.style.marginBottom = '550px';
        }
    }
    spin3.onclick = function() {
        if (spin3.style.rotate == '90deg') {
            spin3.style.rotate = '0deg';
            cover3.style.width = '100%';
        } else {
            spin3.style.rotate = '90deg';
            cover3.style.width = '0%';
        }
    }
    const appImg = document.getElementById('app-img');

    const appButton1 = document.getElementById('app-button-1');
    const appButton2 = document.getElementById('app-button-2');
    const appButton3 = document.getElementById('app-button-3');
    const appButton4 = document.getElementById('app-button-4');

    appButton1.onclick = function() {
        appImg.src = './applist.png';
    }
    appButton2.onclick = function() {
        appImg.src = './apprun.png';
    }
    appButton3.onclick = function() {
        appImg.src = './apphistory.png';
    }
    appButton4.onclick = function() {
        appImg.src = './appsettings.png';
    }
}