const menu = document.querySelector('.menu-burger');
const listaMenu = document.querySelector('.lista-menu');

let isOpen = false;

const abrirMenu = () => {
    menu.style.color = 'var(--cor-branco)';
    menu.style.background = 'var(--azul-degrade)';
    isOpen = true;
    listaMenu.classList.toggle('active');
}

const fecharMenu = () => {
    menu.style.color = 'var(--cor-preta)';
    menu.style.background = 'var(--cor-branco)';
    isOpen = false;
    listaMenu.classList.toggle('active');
}

menu.addEventListener('click', (event) => {
    if (isOpen === false) {
        event.stopPropagation();
        abrirMenu();
    } else {
        fecharMenu();
    }
});

document.addEventListener('click', () => {
    if (isOpen === true) {
        fecharMenu();
    }
});