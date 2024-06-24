document.addEventListener('DOMContentLoaded', () => {
    const initSlider = (containerSelector, itemSelector, leftArrowSelector, rightArrowSelector, autoSlideInterval) => {
        const container = document.querySelector(containerSelector);
        const items = container.querySelectorAll(itemSelector);
        const leftArrow = container.querySelector(leftArrowSelector);
        const rightArrow = container.querySelector(rightArrowSelector);
        let currentIndex = 0;

        const showSlide = (index) => {
            items.forEach((item, i) => {
                item.classList.toggle('active', i === index);
            });
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % items.length;
            showSlide(currentIndex);
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showSlide(currentIndex);
        };

        rightArrow.addEventListener('click', nextSlide);
        leftArrow.addEventListener('click', prevSlide);

        if (autoSlideInterval) {
            setInterval(nextSlide, autoSlideInterval);
        }

        if (containerSelector === '.clients_customer__content-wrapper') {
            container.addEventListener('wheel', (event) => {
                if (event.deltaY > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            });
        }

        showSlide(currentIndex);
    };

    const trackYandexMetrikaGoal = (counterId, goal) => {
        const yandexCounter = window[`yaCounter${counterId}`];
        if (yandexCounter) {
            yandexCounter.reachGoal(goal);
        }
    };

    const setupCallButtonListener = () => {
        const callButton = document.getElementById('call-button');
        if (callButton) {
            callButton.addEventListener('click', () => {
                trackYandexMetrikaGoal('99999999', 'test-target');
            });
        }
    };

    const setupPopupLogic = () => {
        const openPopupButton = document.querySelector('.cta_customer__button--primary');
        const overlay = document.getElementById('overlay');
        const closeButton = document.querySelector('.popup .close');
        const popupForm = document.getElementById('popupForm');

        if (openPopupButton) {
            openPopupButton.addEventListener('click', () => {
                overlay.style.display = 'flex';
            });
        }

        if (closeButton) {
            closeButton.addEventListener('click', () => {
                overlay.style.display = 'none';
            });
        }

        if (overlay) {
            overlay.addEventListener('click', (event) => {
                if (event.target === overlay) {
                    overlay.style.display = 'none';
                }
            });
        }

        if (popupForm) {
            popupForm.addEventListener('submit', (event) => {
                event.preventDefault();
                overlay.style.display = 'none';
            });
        }
    };

    initSlider('.testimonials_customer__content', '.testimonials_customer__card', '.testimonials_customer__arrow--left', '.testimonials_customer__arrow--right');
    initSlider('.clients_customer__content-wrapper', '.clients_customer__logo-container', '.clients_customer__arrow--left', '.clients_customer__arrow--right', 4000);

    setupCallButtonListener();
    setupPopupLogic();
});
