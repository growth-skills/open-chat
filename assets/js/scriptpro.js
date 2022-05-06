

const iconEllipsis = document.getElementById('icon-ellipsis');
const box = document.querySelector('.box');


iconEllipsis.addEventListener('click', () =>{
    iconEllipsis.classList.toggle('icon-ellipsis');
    box.classList.toggle('boxing');
})
