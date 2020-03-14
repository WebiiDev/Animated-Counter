const numbers = document.querySelectorAll('.number');
const speed = 1013;

window.addEventListener('load', updateNumbers);

function updateNumbers() {
    numbers.forEach(number => {
        if (+number.innerText >= +number.getAttribute('data-number')) {
            number.innerText = number.getAttribute('data-number')
            return;
        } else {
            number.innerText = +number.innerText + speed;
        }
    });
    setTimeout(updateNumbers, 10)
}