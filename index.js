const trackYandexMetrikaGoal = (counterId, goal) => {
    const yandexCounter = window[`yaCounter${counterId}`];
    if (yandexCounter) {
        yandexCounter.reachGoal(goal);
    }
};

const setupCallButtonListener = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const callButton = document.getElementById('call-button');
        if (callButton) {
            callButton.addEventListener('click', () => {
                trackYandexMetrikaGoal('99999999', 'test-target');
            });
        }

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
    });
};

setupCallButtonListener();
