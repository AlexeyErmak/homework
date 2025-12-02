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

    // more

    // const btn = document.getElementById('showMoreBtn');

    // btn.addEventListener('click', () => {
    //     const hiddenItems = Array.from(document.querySelectorAll('#items .item.hidden'));
    //     const toShow = hiddenItems.slice(0, 2); // Показать по 2 элемента

    //     toShow.forEach(el => el.classList.remove('hidden'));

    //     if (document.querySelectorAll('#items .item.hidden').length === 0) {
    //         btn.style.display = 'none'; // Скрыть кнопку, если элементов не осталось
    //     }
    // });

    const btn = document.getElementById('showMoreBtn');

    btn.addEventListener('click', () => {
        // Сначала показываем элементы с классом hidden
        let hiddenItems = Array.from(document.querySelectorAll('#items .hidden'));

        if (hiddenItems.length > 0) {
            // Убираем класс hidden у двух элементов
            hiddenItems.slice(0, 2).forEach(el => el.classList.remove('hidden'));
        } else {
            // Если скрытых по hidden нет — убираем hide-on-mobile (показываем на мобилках)
            let mobileHiddenItems = Array.from(document.querySelectorAll('#items .hide-on-mobile'));
            if (mobileHiddenItems.length > 0) {
                mobileHiddenItems.slice(0, 2).forEach(el => el.classList.remove('hide-on-mobile'));
            }
        }

        // Скрываем кнопку, если нет больше ни hidden, ни hide-on-mobile
        if (
            document.querySelectorAll('#items .hidden').length === 0 &&
            document.querySelectorAll('#items .hide-on-mobile').length === 0
        ) {
            btn.style.display = 'none';
        }
    });
})()

