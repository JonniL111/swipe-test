import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container');

  (function () {
    const form = document.querySelector('.swipe-form');
    const textBlock = document.querySelector('.added-text');
    form.addEventListener('submit', addText);

    function addText(e) {
      e.preventDefault();
      const textArea = e.target.querySelector('.swipe-form__textarea');
      const div = document.createElement('div');
      div.classList.add('added-text__text');
      div.innerHTML = textArea.value;
      textBlock.prepend(div);
      textArea.value = '';
    }
  })();

  (function () {
    window.setInterval(function () {
      var now = new Date();
      var clock = document.querySelector('.clock');
      clock.innerHTML = now.toLocaleTimeString();
    }, 1000);
  })();
});
