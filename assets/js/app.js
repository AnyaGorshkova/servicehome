/*(function() {
  'use strict';
  console.log('Hello');
})();
*/
document.addEventListener("DOMContentLoaded", function(){
  
  var orderButtons = document.querySelectorAll('.main-header__button'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBjb25zb2xlLmxvZygnSGVsbG8nKTtcclxufSkoKTtcclxuKi9cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcclxuICBcclxuICB2YXIgb3JkZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4taGVhZGVyX19idXR0b24nKSxcclxuICAgICAgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwnKSxcclxuICAgICAgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UnKSxcclxuICAgICAgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd2aWRlbycpLFxyXG4gICAgICBwbGF5UGF1c2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhZmZfX3ZpZGVvLXBsYXknKSxcclxuXHJcbiAgICAgIHNsaWRlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVWYWx1ZScpLFxyXG4gICAgICBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyJyk7XHJcblxyXG4gICAgc2xpZGVyWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbigpe1xyXG4gICAgICBzbGlkZVZhbHVlWzBdLmlubmVySFRNTCA9IHNsaWRlclswXS52YWx1ZSArICcg0LwgPHN1cD4yPC9zdXA+JztcclxuICAgIH0pXHJcbiAgLy8g0L7RgtC60YDRi9GC0LjQtSDQuCDQt9Cw0LrRgNGL0YLQuNC1INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcmRlckJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIG9yZGVyQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbW9kYWxXaW5kb3dbMF0uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgfSlcclxuICB9O1xyXG4gIFxyXG4gIGNsb3NlQnV0dG9uWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICB9KVxyXG5cclxuICBwbGF5UGF1c2VCdXR0b25bMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodmlkZW9bMF0ucGF1c2VkKSB7XHJcbiAgICAgIHZpZGVvWzBdLnBsYXkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZpZGVvWzBdLnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
