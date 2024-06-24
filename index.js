const trackYandexMetrikaGoal = (counterId, goal) => {
    if (window[`yaCounter${counterId}`]) {
        window[`yaCounter${counterId}`].reachGoal(goal);
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
    });
};

setupCallButtonListener();
