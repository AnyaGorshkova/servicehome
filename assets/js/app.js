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


  /*var detailButtons = document.querySelectorAll('.rewiews__detil'),
    abs = document.querySelectorAll('.abs');
  for(var i=0; i<detailButtons.length; i++) {
    
    detailButtons[i].addEventListener('click', function() {


          for (var j = 0; j < abs.length; j++) {
            abs[j].classList.remove('abs--active');
          }
          
          this.children[0].classList.add('abs--active');
          
          
        })
      }*/
    
  var countdown;
function Timer() {


  var now = new Date();
  var then = new Date (2017, 11, 7);
  var secondLeft = then -now;

  var days = document.querySelector('#days');
  var minutes = document.querySelector('#minutes');
  var hours = document.querySelector('#hours');
  var sec = document.querySelector('#sec');


  countdown = setInterval(() => {
    const secondLeft = Math.round((then - Date.now()));

    if(secondLeft < 0) {
      clearInterval(countdown);
      return;
    }


    sec.textContent = `${Math.floor((((secondLeft%86400000)%3600000)%60000)/1000) <10 ? '0' : ''}${Math.floor((((secondLeft%86400000)%3600000)%60000)/1000)}`;
    minutes.textContent = Math.floor(((secondLeft%86400000)%3600000)/1000/60);
    hours.textContent = Math.floor((secondLeft%86400000)/1000/60/60);
    days.textContent = Math.floor(secondLeft/86400000);


  },1000);
  /*console.log (now);

  console.log("days: "+Math.floor(secondLeft/86400000));
  console.log("hours: "+Math.floor((secondLeft%86400000)/1000/60/60));
  console.log("min: "+Math.floor(((secondLeft%86400000)%3600000)/1000/60));
  console.log("sec: "+Math.floor((((secondLeft%86400000)%3600000)%60000)/1000));*/
};
Timer();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBjb25zb2xlLmxvZygnSGVsbG8nKTtcclxufSkoKTtcclxuKi9cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcclxuICBcclxuICB2YXIgb3JkZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1vcmRlcicpLFxyXG4gICAgICBjYWxjQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGMtYnV0dG9uJylbMF0sXHJcbiAgICAgIG9yZGVyV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9yZGVyLW1vZGFsJyksXHJcbiAgICAgIGNhbGNXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsYy1tb2RhbCcpWzBdLFxyXG4gICAgICBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZScpLFxyXG4gICAgICB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ZpZGVvJyksXHJcbiAgICAgIHBsYXlQYXVzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFmZl9fdmlkZW8tcGxheScpLFxyXG5cclxuICAgICAgc2xpZGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZVZhbHVlJyksXHJcbiAgICAgIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXInKSxcclxuXHJcbiAgICAgIGZsYXRTcSA9IHNsaWRlclswXS52YWx1ZSxcclxuICAgICAgZmxhdFR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucm9vbXMtY291bnRfX2l0ZW0tLWFjdGl2ZScpWzBdLFxyXG4gICAgICByZXBhaXJUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaWNlLW9mZmVyc19faXRlbS0tYWN0aXZlJylbMF0sXHJcblxyXG4gICAgICBjaGVja0ZsYXRUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvb21zLWNvdW50X19pdGVtJyksXHJcbiAgICAgIGNoZWNrUmVwYWlyVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmljZS1vZmZlcnNfX2l0ZW0nKTtcclxuICAgICAgXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhmbGF0U3EpO1xyXG4gICAgICBjb25zb2xlLmxvZyhmbGF0VHlwZS5pbm5lckhUTUwpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXBhaXJUeXBlLmNoaWxkcmVuWzFdLmlubmVySFRNTCk7XHJcblxyXG4gIC8vINC00LvRjyDQutCw0LvRjNC60YPQu9GP0YLQvtGA0LBcclxuICAvLyDQv9C+0LvRg9GH0LDQtdC8INC/0LvQvtGJ0LDQtNGMINC60LLQsNGA0YLQuNGA0YtcclxuICAgIHNsaWRlclswXS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgZmxhdFNxID0gc2xpZGVyWzBdLnZhbHVlO1xyXG4gICAgICBzbGlkZVZhbHVlWzBdLmlubmVySFRNTCA9IGZsYXRTcSArICcg0LwgPHN1cD4yPC9zdXA+JztcclxuICAgIH0pXHJcbi8vINC/0L7Qu9GD0YfQsNC10Lwg0LrQvtC70LjRh9C10YHRgtCy0L4g0LrQvtC80L3QsNGCXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoZWNrRmxhdFR5cGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY2hlY2tGbGF0VHlwZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNoZWNrRmxhdFR5cGUubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGNoZWNrRmxhdFR5cGVbal0uY2xhc3NMaXN0LnJlbW92ZSgncm9vbXMtY291bnRfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3Jvb21zLWNvdW50X19pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgICBmbGF0VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb29tcy1jb3VudF9faXRlbS0tYWN0aXZlJylbMF07IFxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuLy8g0L/QvtC70YPRh9Cw0LXQvCDRgtC40L8g0YDQtdC80L7QvdGC0LBcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hlY2tSZXBhaXJUeXBlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNoZWNrUmVwYWlyVHlwZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNoZWNrUmVwYWlyVHlwZS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY2hlY2tSZXBhaXJUeXBlW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ3ByaWNlLW9mZmVyc19faXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgncHJpY2Utb2ZmZXJzX19pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgICByZXBhaXJUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaWNlLW9mZmVyc19faXRlbS0tYWN0aXZlJylbMF07IFxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBjYWxjQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsYy1tb2RhbF9fcm9vbXMnKVswXS5pbm5lckhUTUwgPSBmbGF0VHlwZS5pbm5lckhUTUw7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjLW1vZGFsX19yZXBhaXInKVswXS5pbm5lckhUTUwgPSByZXBhaXJUeXBlLmNoaWxkcmVuWzFdLmlubmVySFRNTC5zcGxpdChcIiBcIilbMF07XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjLW1vZGFsX19zcScpWzBdLmlubmVySFRNTCA9IGZsYXRTcSArICcg0LwgPHN1cD4yPC9zdXA+JztcclxuICAgICAgY2FsY1dpbmRvdy5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gIC8vINC+0YLQutGA0YvRgtC40LUg0Lgg0LfQsNC60YDRi9GC0LjQtSDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsFxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb3JkZXJCdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvcmRlckJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG9yZGVyV2luZG93WzBdLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH0pXHJcbiAgfTtcclxuICBcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNsb3NlQnV0dG9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjbG9zZUJ1dHRvbltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH0pXHJcbiAgfTtcclxuIFxyXG5cclxuXHJcbiAgLy8g0KHQutGA0LjQv9GC0Ysg0LTQu9GPINCy0LjQtNC10L5cclxuICBwbGF5UGF1c2VCdXR0b25bMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodmlkZW9bMF0ucGF1c2VkKSB7XHJcbiAgICAgIHZpZGVvWzBdLnBsYXkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZpZGVvWzBdLnBhdXNlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuICAvLyDQlNC70Y8g0YHQu9Cw0LnQtNC10YDQsCDRgSDQvtGC0LfRi9Cy0LDQvNC4IFxyXG5cclxuICB2YXIgc2xpZGVySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmV3aWV3c19faXRlbScpLFxyXG4gICAgICBwYWdpbmF0aW9uSXRlbXMgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2UtcGFnaW5hdGlvbl9faXRlbScpO1xyXG5cclxuICBmb3IodmFyIGk9MDsgaTxwYWdpbmF0aW9uSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICBwYWdpbmF0aW9uSXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYWdpbmF0aW9uSXRlbXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBwYWdpbmF0aW9uSXRlbXNbal0uY2xhc3NMaXN0LnJlbW92ZSgncGFnZS1wYWdpbmF0aW9uX19pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgICBzbGlkZXJJdGVtc1tqXS5jbGFzc0xpc3QucmVtb3ZlKCdyZXdpZXdzX19pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdwYWdlLXBhZ2luYXRpb25fX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICBzbGlkZXJJdGVtc1t0aGlzLmRhdGFzZXQubnVtYmVyXS5jbGFzc0xpc3QuYWRkKCdyZXdpZXdzX19pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgXHJcbiAgICAgIC8vc2xpZGVySXRlbXNbaV0uY2xhc3NMaXN0LmFkZCgncmV3aWV3c19faXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgIFxyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICAvKnZhciBkZXRhaWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJld2lld3NfX2RldGlsJyksXHJcbiAgICBhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJzJyk7XHJcbiAgZm9yKHZhciBpPTA7IGk8ZGV0YWlsQnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgXHJcbiAgICBkZXRhaWxCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYWJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGFic1tqXS5jbGFzc0xpc3QucmVtb3ZlKCdhYnMtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2Ficy0tYWN0aXZlJyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0qL1xyXG4gICAgXHJcbiAgdmFyIGNvdW50ZG93bjtcclxuZnVuY3Rpb24gVGltZXIoKSB7XHJcblxyXG5cclxuICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuICB2YXIgdGhlbiA9IG5ldyBEYXRlICgyMDE3LCAxMSwgNyk7XHJcbiAgdmFyIHNlY29uZExlZnQgPSB0aGVuIC1ub3c7XHJcblxyXG4gIHZhciBkYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RheXMnKTtcclxuICB2YXIgbWludXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW51dGVzJyk7XHJcbiAgdmFyIGhvdXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdXJzJyk7XHJcbiAgdmFyIHNlYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWMnKTtcclxuXHJcblxyXG4gIGNvdW50ZG93biA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGNvbnN0IHNlY29uZExlZnQgPSBNYXRoLnJvdW5kKCh0aGVuIC0gRGF0ZS5ub3coKSkpO1xyXG5cclxuICAgIGlmKHNlY29uZExlZnQgPCAwKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZWMudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKCgoKHNlY29uZExlZnQlODY0MDAwMDApJTM2MDAwMDApJTYwMDAwKS8xMDAwKSA8MTAgPyAnMCcgOiAnJ30ke01hdGguZmxvb3IoKCgoc2Vjb25kTGVmdCU4NjQwMDAwMCklMzYwMDAwMCklNjAwMDApLzEwMDApfWA7XHJcbiAgICBtaW51dGVzLnRleHRDb250ZW50ID0gTWF0aC5mbG9vcigoKHNlY29uZExlZnQlODY0MDAwMDApJTM2MDAwMDApLzEwMDAvNjApO1xyXG4gICAgaG91cnMudGV4dENvbnRlbnQgPSBNYXRoLmZsb29yKChzZWNvbmRMZWZ0JTg2NDAwMDAwKS8xMDAwLzYwLzYwKTtcclxuICAgIGRheXMudGV4dENvbnRlbnQgPSBNYXRoLmZsb29yKHNlY29uZExlZnQvODY0MDAwMDApO1xyXG5cclxuXHJcbiAgfSwxMDAwKTtcclxuICAvKmNvbnNvbGUubG9nIChub3cpO1xyXG5cclxuICBjb25zb2xlLmxvZyhcImRheXM6IFwiK01hdGguZmxvb3Ioc2Vjb25kTGVmdC84NjQwMDAwMCkpO1xyXG4gIGNvbnNvbGUubG9nKFwiaG91cnM6IFwiK01hdGguZmxvb3IoKHNlY29uZExlZnQlODY0MDAwMDApLzEwMDAvNjAvNjApKTtcclxuICBjb25zb2xlLmxvZyhcIm1pbjogXCIrTWF0aC5mbG9vcigoKHNlY29uZExlZnQlODY0MDAwMDApJTM2MDAwMDApLzEwMDAvNjApKTtcclxuICBjb25zb2xlLmxvZyhcInNlYzogXCIrTWF0aC5mbG9vcigoKChzZWNvbmRMZWZ0JTg2NDAwMDAwKSUzNjAwMDAwKSU2MDAwMCkvMTAwMCkpOyovXHJcbn07XHJcblRpbWVyKCk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
