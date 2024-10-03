let ideasBtn = document.querySelector('.ideas-btn');

ideasBtn.addEventListener('mousedown', () => {
    if (ideasBtn) {
        ideasBtn.classList.add('ideas-btn--active');

    }
})
ideasBtn.addEventListener('mouseup', () => {
    if (ideasBtn) {
        ideasBtn.classList.remove('ideas-btn--active');

    }
})