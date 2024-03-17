let id = document.querySelector('.id');
let advice = document.querySelector('.advice');
const dicebtn = document.querySelector('.dice');

dicebtn.addEventListener('click',() => {
    fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
        id.innerText = data.slip.id;
        advice.innerText = data.slip.advice;
    });
})