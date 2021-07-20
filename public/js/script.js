const rulesBtn = document.querySelector('.footer__rules-btn');
const modalBg = document.querySelector('.rules-modal');
const modal = document.querySelector('.rules-modal__modal');
const close = document.querySelector('.close');

rulesBtn.addEventListener('click', () => {
    modalBg.classList.toggle('show');
    modal.classList.toggle('show');
});

close.addEventListener('click', () => {
    modalBg.classList.toggle('show');
    modal.classList.toggle('show');
});