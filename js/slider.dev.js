"use strict";

(function () {
  var propSlider = {
    slider: document.getElementById('slider'),
    firstSlider: null
  };
  var metSlider = {
    inicio: function inicio() {
      setInterval(metSlider.moveSlide, 3000);
    },
    moveSlide: function moveSlide() {
      propSlider.slider.style.transition = 'all 1s ease';
      propSlider.slider.style.marginLeft = '-100%';
      setTimeout(function () {
        propSlider.firstSlider = propSlider.slider.firstElementChild;
        propSlider.slider.appendChild(propSlider.firstSlider);
        propSlider.slider.style.transition = 'unset';
        propSlider.slider.style.marginLeft = 0;
      }, 1000);
    }
  };
  metSlider.inicio();
})();