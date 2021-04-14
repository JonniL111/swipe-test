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
      textBlock.prepend(div);
      animate(textArea.value, textBlock);
      textArea.value = '';
    }

    function animate(text, textBlock) {
      text = [...text];
      for (let i = 0; i < text.length; i++) {
        (function (i) {
          setTimeout(function () {
            const texts = document.createTextNode(text[i]);            
            textBlock.firstElementChild.appendChild(texts);
          }, 75 * i);
        })(i);
      }
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
