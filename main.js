let btnClick = document.querySelector('.btn');
let popup = document.querySelector('.popup');
let btnClose = document.querySelector('.close');

btnClick.addEventListener('click', (e) => {
    popupShow();
});

function popupShow() {
    // popup.style.display = 'block';
    popup.classList.add('popup--show');
};

function popupHide() {
    // popup.style.display = 'none';
    popup.classList.remove('popup--show');
};

btnClose.addEventListener('click', (e) => {
    popupHide();
});