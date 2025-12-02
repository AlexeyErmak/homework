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

    // count

    function initCounters() {

        const counters = document.querySelectorAll('.quantity');

        counters.forEach(counter => {
            const decrementBtn = counter.querySelector('.decrement');
            const incrementBtn = counter.querySelector('.increment');
            const valueEl = counter.querySelector('.counter-value');

            let count = parseInt(valueEl.textContent) || 1;
            valueEl.textContent = count;

            function updateButton() {
                if (count <= 1) {
                    decrementBtn.classList.add('disabled');
                    decrementBtn.disabled = true;
                } else {
                    decrementBtn.classList.remove('disabled');
                    decrementBtn.disabled = false;
                }
            }

            decrementBtn.addEventListener('click', () => {
                if (count > 1) {
                    count--;
                    animateValue(valueEl, count);
                }
            });

            incrementBtn.addEventListener('click', () => {
                count++;
                animateValue(valueEl, count);
            });

            function animateValue(element, newValue) {
                element.classList.add('animate');
                element.textContent = newValue;

                setTimeout(() => {
                    element.classList.remove('animate');
                    updateButton();
                }, 200);
            }

            updateButton();
        });
    }

    document.addEventListener('DOMContentLoaded', initCounters);

    // dropdown-ul

    const tabControls = document.querySelector('.drop-ul')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.dropdown__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('dropdown__link--active')) return

        const tabContentId = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentId)
        const activeControl = document.querySelector('.dropdown__link--active')
        const activeContent = document.querySelector('.drop-ul-content--show')

        activeControl.classList.remove('dropdown__link--active')
        activeContent.classList.remove('drop-ul-content--show')

        tabControl.classList.add('dropdown__link--active')
        tabContent.classList.add('drop-ul-content--show')
    }

    // slider

    const swiper = new Swiper('.slider', {

        slidesPerView: 1,

        pagination: {
            el: '.offers__pagination',
        },

        navigation: {
            nextEl: '.offers__next',
            prevEl: '.offers__prev',
        },
    });
})()

