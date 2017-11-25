/*(function() {
  'use strict';
  console.log('Hello');
})();
*/
document.addEventListener("DOMContentLoaded", function(){
  
  var orderButtons = document.querySelectorAll('.button-order'),
      modalWindow = document.querySelectorAll('.modal'),
      closeButton = document.querySelectorAll('.close'),
      video = document.querySelectorAll('video'),
      playPauseButton = document.querySelectorAll('.staff__video-play'),

      slideValue = document.querySelectorAll('.slideValue'),
      slider = document.querySelectorAll('.slider');

    slider[0].addEventListener("input", function(){
      slideValue[0].innerHTML = slider[0].value + ' м <sup>2</sup>';
    })
  // открытие и закрытие модального окна
  for (var i = 0; i < orderButtons.length; i++) {
    orderButtons[i].addEventListener("click", function(e){
      e.preventDefault();
      modalWindow[0].classList.add('visible');
    })
  };
  
  closeButton[0].addEventListener("click", function() {
    this.parentNode.parentNode.classList.remove('visible');
  })

  playPauseButton[0].addEventListener('click', function(event) {
    event.stopPropagation();
    if (video[0].paused) {
      video[0].play();
    } else {
      video[0].pause();
    }
  });




});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBjb25zb2xlLmxvZygnSGVsbG8nKTtcclxufSkoKTtcclxuKi9cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcclxuICBcclxuICB2YXIgb3JkZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1vcmRlcicpLFxyXG4gICAgICBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpLFxyXG4gICAgICBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZScpLFxyXG4gICAgICB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ZpZGVvJyksXHJcbiAgICAgIHBsYXlQYXVzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFmZl9fdmlkZW8tcGxheScpLFxyXG5cclxuICAgICAgc2xpZGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZVZhbHVlJyksXHJcbiAgICAgIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXInKTtcclxuXHJcbiAgICBzbGlkZXJbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHNsaWRlVmFsdWVbMF0uaW5uZXJIVE1MID0gc2xpZGVyWzBdLnZhbHVlICsgJyDQvCA8c3VwPjI8L3N1cD4nO1xyXG4gICAgfSlcclxuICAvLyDQvtGC0LrRgNGL0YLQuNC1INC4INC30LDQutGA0YvRgtC40LUg0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LBcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9yZGVyQnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3JkZXJCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBtb2RhbFdpbmRvd1swXS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICB9KVxyXG4gIH07XHJcbiAgXHJcbiAgY2xvc2VCdXR0b25bMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gIH0pXHJcblxyXG4gIHBsYXlQYXVzZUJ1dHRvblswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh2aWRlb1swXS5wYXVzZWQpIHtcclxuICAgICAgdmlkZW9bMF0ucGxheSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmlkZW9bMF0ucGF1c2UoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
