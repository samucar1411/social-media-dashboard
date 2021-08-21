document.addEventListener('DOMContentLoaded', function() {
    toggleSwitch();
});

function toggleSwitch() {

    const button = document.querySelector('#toggle')
    button.addEventListener('change', () => {
        var body = document.querySelector('body');
        body.classList.toggle('light-theme')
    })


}