const closeButtons = document.querySelectorAll('.close-button');

for (let i = 0; i < closeButtons.length; i++) {
    const button = closeButtons[i];
    button.addEventListener('click', () => {
        button.parentNode.remove();
    });
}
