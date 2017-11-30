/*(function() {
  'use strict';
  console.log('Hello');
})();
*/
document.addEventListener("DOMContentLoaded", function(){
  
  var orderButtons = document.querySelectorAll('.button-order'),
      calcButton = document.querySelectorAll('.calc-button')[0],
      orderWindow = document.querySelectorAll('.order-modal'),
      calcWindow = document.querySelectorAll('.calc-modal')[0],
      closeButton = document.querySelectorAll('.close'),
      video = document.querySelectorAll('video'),
      playPauseButton = document.querySelectorAll('.staff__video-play'),

      slideValue = document.querySelectorAll('.slideValue'),
      slider = document.querySelectorAll('.slider'),

      flatSq = slider[0].value,
      flatType = document.querySelectorAll('.rooms-count__item--active')[0],
      repairType = document.querySelectorAll('.price-offers__item--active')[0],

      checkFlatType = document.querySelectorAll('.rooms-count__item'),
      checkRepairType = document.querySelectorAll('.price-offers__item');
      

      console.log(flatSq);
      console.log(flatType.innerHTML);
      console.log(repairType.children[1].innerHTML);

  // для калькулятора

  // получаем площадь квартиры
    slider[0].addEventListener("input", function(){
      flatSq = slider[0].value;
      slideValue[0].innerHTML = flatSq + ' м <sup>2</sup>';
    })
// получаем количество комнат
    for (var i = 0; i < checkFlatType.length; i++) {
      checkFlatType[i].addEventListener("click", function(){
        for (var j = 0; j < checkFlatType.length; j++) {
          checkFlatType[j].classList.remove('rooms-count__item--active');
        }
        
        this.classList.add('rooms-count__item--active');
        flatType = document.querySelectorAll('.rooms-count__item--active')[0]; 
      })
    };
// получаем тип ремонта
    for (var i = 0; i < checkRepairType.length; i++) {
      checkRepairType[i].addEventListener("click", function(){
        for (var j = 0; j < checkRepairType.length; j++) {
          checkRepairType[j].classList.remove('price-offers__item--active');
        }
        
        this.classList.add('price-offers__item--active');
        repairType = document.querySelectorAll('.price-offers__item--active')[0]; 
      })
    };

    calcButton.addEventListener("click", function(e){
      e.preventDefault();
      document.querySelectorAll('.calc-modal__rooms')[0].innerHTML = flatType.innerHTML;
      document.querySelectorAll('.calc-modal__repair')[0].innerHTML = repairType.children[1].innerHTML.split(" ")[0];
      document.querySelectorAll('.calc-modal__sq')[0].innerHTML = flatSq + ' м <sup>2</sup>';
      calcWindow.classList.add('visible');
    });


  // открытие и закрытие модального окна
  for (var i = 0; i < orderButtons.length; i++) {
    orderButtons[i].addEventListener("click", function(e){
      e.preventDefault();
      orderWindow[0].classList.add('visible');
    })
  };
  
  for (var i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener("click", function() {
      this.parentNode.parentNode.classList.remove('visible');
    })
  };
 


  // Скрипты для видео
  playPauseButton[0].addEventListener('click', function(event) {
    event.stopPropagation();
    if (video[0].paused) {
      video[0].play();
    } else {
      video[0].pause();
    }
  });


  // Для слайдера с отзывами 

  var sliderItems = document.querySelectorAll('.rewiews__item'),
      paginationItems =  document.querySelectorAll('.page-pagination__item');

  for(var i=0; i<paginationItems.length; i++) {

    paginationItems[i].addEventListener('click', function() {
      for (var j = 0; j < paginationItems.length; j++) {
        paginationItems[j].classList.remove('page-pagination__item--active');
        sliderItems[j].classList.remove('rewiews__item--active');
      }
      
      this.classList.add('page-pagination__item--active');
      sliderItems[this.dataset.number].classList.add('rewiews__item--active');
      
      //sliderItems[i].classList.add('rewiews__item--active');
      
    })
  }


  var detailButtons = document.querySelectorAll('.rewiews__detil');
    
  for(var i=0; i<detailButtons.length; i++) {
    
    detailButtons[i].addEventListener('click', function() {

          var abs = document.querySelectorAll('.abs');
          console.log(abs);
          for (var j = 0; j < abs.length; j++) {
            abs[j].classList.remove('abs--active');
          }
          
          this.children[0].classList.add('abs--active');


          
          
        })
      }
    
  var countdown;
function Timer() {


  var now = new Date();
  var then = new Date (2017, 11, 7);
  var secondLeft = then -now;

  var days = document.querySelector('#days');
  var minutes = document.querySelector('#minutes');
  var hours = document.querySelector('#hours');
  var sec = document.querySelector('#sec');


  countdown = setInterval(function() {
    const secondLeft = Math.round((then - Date.now()));

    if(secondLeft < 0) {
      clearInterval(countdown);
      return;
    }


    //sec.textContent = `${Math.floor((((secondLeft%86400000)%3600000)%60000)/1000) <10 ? '0' : ''}${Math.floor((((secondLeft%86400000)%3600000)%60000)/1000)}`;
    sec.textContent = Math.floor((((secondLeft%86400000)%3600000)%60000)/1000);
    minutes.textContent = Math.floor(((secondLeft%86400000)%3600000)/1000/60);
    hours.textContent = Math.floor((secondLeft%86400000)/1000/60/60);
    days.textContent = Math.floor(secondLeft/86400000);


  },1000);
};
Timer();

// Секция вопросы

var questions = document.querySelectorAll('.questions__item');
var ansver = document.querySelectorAll('.questions__answers');

for(var i=0; i<questions.length; i++) {
  
  questions[i].addEventListener('click', function() {
        
        console.log(window.getComputedStyle(this.children[1], null).height);
        this.children[0].classList.toggle('questions__text--active');
        this.children[1].classList.toggle('questions__answers--active');
      })
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgY29uc29sZS5sb2coJ0hlbGxvJyk7XHJcbn0pKCk7XHJcbiovXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XHJcbiAgXHJcbiAgdmFyIG9yZGVyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tb3JkZXInKSxcclxuICAgICAgY2FsY0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjLWJ1dHRvbicpWzBdLFxyXG4gICAgICBvcmRlcldpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcmRlci1tb2RhbCcpLFxyXG4gICAgICBjYWxjV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGMtbW9kYWwnKVswXSxcclxuICAgICAgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UnKSxcclxuICAgICAgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd2aWRlbycpLFxyXG4gICAgICBwbGF5UGF1c2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhZmZfX3ZpZGVvLXBsYXknKSxcclxuXHJcbiAgICAgIHNsaWRlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVWYWx1ZScpLFxyXG4gICAgICBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyJyksXHJcblxyXG4gICAgICBmbGF0U3EgPSBzbGlkZXJbMF0udmFsdWUsXHJcbiAgICAgIGZsYXRUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvb21zLWNvdW50X19pdGVtLS1hY3RpdmUnKVswXSxcclxuICAgICAgcmVwYWlyVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmljZS1vZmZlcnNfX2l0ZW0tLWFjdGl2ZScpWzBdLFxyXG5cclxuICAgICAgY2hlY2tGbGF0VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb29tcy1jb3VudF9faXRlbScpLFxyXG4gICAgICBjaGVja1JlcGFpclR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpY2Utb2ZmZXJzX19pdGVtJyk7XHJcbiAgICAgIFxyXG5cclxuICAgICAgY29uc29sZS5sb2coZmxhdFNxKTtcclxuICAgICAgY29uc29sZS5sb2coZmxhdFR5cGUuaW5uZXJIVE1MKTtcclxuICAgICAgY29uc29sZS5sb2cocmVwYWlyVHlwZS5jaGlsZHJlblsxXS5pbm5lckhUTUwpO1xyXG5cclxuICAvLyDQtNC70Y8g0LrQsNC70YzQutGD0LvRj9GC0L7RgNCwXHJcblxyXG4gIC8vINC/0L7Qu9GD0YfQsNC10Lwg0L/Qu9C+0YnQsNC00Ywg0LrQstCw0YDRgtC40YDRi1xyXG4gICAgc2xpZGVyWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbigpe1xyXG4gICAgICBmbGF0U3EgPSBzbGlkZXJbMF0udmFsdWU7XHJcbiAgICAgIHNsaWRlVmFsdWVbMF0uaW5uZXJIVE1MID0gZmxhdFNxICsgJyDQvCA8c3VwPjI8L3N1cD4nO1xyXG4gICAgfSlcclxuLy8g0L/QvtC70YPRh9Cw0LXQvCDQutC+0LvQuNGH0LXRgdGC0LLQviDQutC+0LzQvdCw0YJcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hlY2tGbGF0VHlwZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjaGVja0ZsYXRUeXBlW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2hlY2tGbGF0VHlwZS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY2hlY2tGbGF0VHlwZVtqXS5jbGFzc0xpc3QucmVtb3ZlKCdyb29tcy1jb3VudF9faXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgncm9vbXMtY291bnRfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICAgIGZsYXRUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvb21zLWNvdW50X19pdGVtLS1hY3RpdmUnKVswXTsgXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4vLyDQv9C+0LvRg9GH0LDQtdC8INGC0LjQvyDRgNC10LzQvtC90YLQsFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGVja1JlcGFpclR5cGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2hlY2tSZXBhaXJUeXBlW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2hlY2tSZXBhaXJUeXBlLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBjaGVja1JlcGFpclR5cGVbal0uY2xhc3NMaXN0LnJlbW92ZSgncHJpY2Utb2ZmZXJzX19pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdwcmljZS1vZmZlcnNfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICAgIHJlcGFpclR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpY2Utb2ZmZXJzX19pdGVtLS1hY3RpdmUnKVswXTsgXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIGNhbGNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjLW1vZGFsX19yb29tcycpWzBdLmlubmVySFRNTCA9IGZsYXRUeXBlLmlubmVySFRNTDtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGMtbW9kYWxfX3JlcGFpcicpWzBdLmlubmVySFRNTCA9IHJlcGFpclR5cGUuY2hpbGRyZW5bMV0uaW5uZXJIVE1MLnNwbGl0KFwiIFwiKVswXTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGMtbW9kYWxfX3NxJylbMF0uaW5uZXJIVE1MID0gZmxhdFNxICsgJyDQvCA8c3VwPjI8L3N1cD4nO1xyXG4gICAgICBjYWxjV2luZG93LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgLy8g0L7RgtC60YDRi9GC0LjQtSDQuCDQt9Cw0LrRgNGL0YLQuNC1INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcmRlckJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIG9yZGVyQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgb3JkZXJXaW5kb3dbMF0uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgfSlcclxuICB9O1xyXG4gIFxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2xvc2VCdXR0b24ubGVuZ3RoOyBpKyspIHtcclxuICAgIGNsb3NlQnV0dG9uW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgfSlcclxuICB9O1xyXG4gXHJcblxyXG5cclxuICAvLyDQodC60YDQuNC/0YLRiyDQtNC70Y8g0LLQuNC00LXQvlxyXG4gIHBsYXlQYXVzZUJ1dHRvblswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh2aWRlb1swXS5wYXVzZWQpIHtcclxuICAgICAgdmlkZW9bMF0ucGxheSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmlkZW9bMF0ucGF1c2UoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG4gIC8vINCU0LvRjyDRgdC70LDQudC00LXRgNCwINGBINC+0YLQt9GL0LLQsNC80LggXHJcblxyXG4gIHZhciBzbGlkZXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXdpZXdzX19pdGVtJyksXHJcbiAgICAgIHBhZ2luYXRpb25JdGVtcyA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFnZS1wYWdpbmF0aW9uX19pdGVtJyk7XHJcblxyXG4gIGZvcih2YXIgaT0wOyBpPHBhZ2luYXRpb25JdGVtcy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgIHBhZ2luYXRpb25JdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhZ2luYXRpb25JdGVtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHBhZ2luYXRpb25JdGVtc1tqXS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLXBhZ2luYXRpb25fX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICAgIHNsaWRlckl0ZW1zW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ3Jld2lld3NfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtcGFnaW5hdGlvbl9faXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgIHNsaWRlckl0ZW1zW3RoaXMuZGF0YXNldC5udW1iZXJdLmNsYXNzTGlzdC5hZGQoJ3Jld2lld3NfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICBcclxuICAgICAgLy9zbGlkZXJJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKCdyZXdpZXdzX19pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIHZhciBkZXRhaWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJld2lld3NfX2RldGlsJyk7XHJcbiAgICBcclxuICBmb3IodmFyIGk9MDsgaTxkZXRhaWxCdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBcclxuICAgIGRldGFpbEJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICB2YXIgYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFicycpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYWJzKTtcclxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYWJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGFic1tqXS5jbGFzc0xpc3QucmVtb3ZlKCdhYnMtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2Ficy0tYWN0aXZlJyk7XHJcblxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgXHJcbiAgdmFyIGNvdW50ZG93bjtcclxuZnVuY3Rpb24gVGltZXIoKSB7XHJcblxyXG5cclxuICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuICB2YXIgdGhlbiA9IG5ldyBEYXRlICgyMDE3LCAxMSwgNyk7XHJcbiAgdmFyIHNlY29uZExlZnQgPSB0aGVuIC1ub3c7XHJcblxyXG4gIHZhciBkYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RheXMnKTtcclxuICB2YXIgbWludXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW51dGVzJyk7XHJcbiAgdmFyIGhvdXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdXJzJyk7XHJcbiAgdmFyIHNlYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWMnKTtcclxuXHJcblxyXG4gIGNvdW50ZG93biA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3Qgc2Vjb25kTGVmdCA9IE1hdGgucm91bmQoKHRoZW4gLSBEYXRlLm5vdygpKSk7XHJcblxyXG4gICAgaWYoc2Vjb25kTGVmdCA8IDApIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd24pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vc2VjLnRleHRDb250ZW50ID0gYCR7TWF0aC5mbG9vcigoKChzZWNvbmRMZWZ0JTg2NDAwMDAwKSUzNjAwMDAwKSU2MDAwMCkvMTAwMCkgPDEwID8gJzAnIDogJyd9JHtNYXRoLmZsb29yKCgoKHNlY29uZExlZnQlODY0MDAwMDApJTM2MDAwMDApJTYwMDAwKS8xMDAwKX1gO1xyXG4gICAgc2VjLnRleHRDb250ZW50ID0gTWF0aC5mbG9vcigoKChzZWNvbmRMZWZ0JTg2NDAwMDAwKSUzNjAwMDAwKSU2MDAwMCkvMTAwMCk7XHJcbiAgICBtaW51dGVzLnRleHRDb250ZW50ID0gTWF0aC5mbG9vcigoKHNlY29uZExlZnQlODY0MDAwMDApJTM2MDAwMDApLzEwMDAvNjApO1xyXG4gICAgaG91cnMudGV4dENvbnRlbnQgPSBNYXRoLmZsb29yKChzZWNvbmRMZWZ0JTg2NDAwMDAwKS8xMDAwLzYwLzYwKTtcclxuICAgIGRheXMudGV4dENvbnRlbnQgPSBNYXRoLmZsb29yKHNlY29uZExlZnQvODY0MDAwMDApO1xyXG5cclxuXHJcbiAgfSwxMDAwKTtcclxufTtcclxuVGltZXIoKTtcclxuXHJcbi8vINCh0LXQutGG0LjRjyDQstC+0L/RgNC+0YHRi1xyXG5cclxudmFyIHF1ZXN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5xdWVzdGlvbnNfX2l0ZW0nKTtcclxudmFyIGFuc3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5xdWVzdGlvbnNfX2Fuc3dlcnMnKTtcclxuXHJcbmZvcih2YXIgaT0wOyBpPHF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gIFxyXG4gIHF1ZXN0aW9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuY2hpbGRyZW5bMV0sIG51bGwpLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlblswXS5jbGFzc0xpc3QudG9nZ2xlKCdxdWVzdGlvbnNfX3RleHQtLWFjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5bMV0uY2xhc3NMaXN0LnRvZ2dsZSgncXVlc3Rpb25zX19hbnN3ZXJzLS1hY3RpdmUnKTtcclxuICAgICAgfSlcclxuICAgIH1cclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
