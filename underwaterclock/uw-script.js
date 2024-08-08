window.addEventListener('load', loaded, false);

function loaded() {
    const spin1 = document.getElementById('spin1');
    const cover1 = document.getElementById('cover1');
    const spin2 = document.getElementById('spin2');
    const cover2 = document.getElementById('cover2');
    const image2 = document.getElementById('image2');
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
            
        } else {
            spin2.style.rotate = '90deg';
            cover2.style.width = '0%';
            image2Cont.style.height = '256px';
        }
    }
}
