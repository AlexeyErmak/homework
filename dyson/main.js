(function () {
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        if (!burgerIcon) return
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    const burgerLinks = document.querySelectorAll('.header__link')
    burgerLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('body--opened-menu');
        });
    });
})()

