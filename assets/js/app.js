/*(function() {
  'use strict';
  console.log('Hello');
})();
*/
document.addEventListener("DOMContentLoaded", function(){

  PubSub.publish( 'init');
  
  var orderButtons = document.querySelectorAll('.button-order'),
      
      orderWindow = document.querySelectorAll('.order-modal'),
      closeButton = document.querySelectorAll('.close'),
      video = document.querySelectorAll('video'),
      playPauseButton = document.querySelectorAll('.staff__video-play');

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
var Counter = (function() {

    
    var now = new Date();
    var then = new Date (2017, 11, 7);
    var secondLeft = then -now;
    var countdown, secondLeft;

    function transformTime(ms) {

        var dayLeft = Math.floor(secondLeft/86400000),
            hoursLeft =  Math.floor((secondLeft%86400000)/1000/60/60),
            minLeft = Math.floor(((secondLeft%86400000)%3600000)/1000/60),
            secLeft = Math.floor((((secondLeft%86400000)%3600000)%60000)/1000);

        return {
            days: dayLeft,
            hours: hoursLeft,
            minutes: minLeft,
            sec:   secLeft
        }
    }

    function displayTime(secondLeft) {

        var days = document.querySelector('#days'),
            minutes = document.querySelector('#minutes'),
            hours = document.querySelector('#hours'),
            sec = document.querySelector('#sec');

        var timeLeft = transformTime(secondLeft);

        if (timeLeft.sec < 10) {
            sec.textContent = '0'+timeLeft.sec;
        } else {
            sec.textContent = timeLeft.sec;
        } 
            minutes.textContent = timeLeft.minutes;
            hours.textContent = timeLeft.hours;
            days.textContent = timeLeft.days;
    };
  
    var init = function() {
        countdown = setInterval(function() {
        secondLeft = Math.round((then - Date.now()));
        if(secondLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTime(secondLeft)
          },1000);
    };
    
    var token = PubSub.subscribe( 'init', init );

})();
var Calc = (function() {

    var calcButton = document.querySelectorAll('.calc-button')[0],
        calcWindow = document.querySelectorAll('.calc-modal')[0],

        slideValue = document.querySelectorAll('.slideValue'),
        slider = document.querySelectorAll('.slider'),

        flatSq = slider[0].value,
        flatType = document.querySelectorAll('.rooms-count__item--active')[0],
        repairType = document.querySelectorAll('.price-offers__item--active')[0],

        checkFlatType = document.querySelectorAll('.rooms-count__item'),
        checkRepairType = document.querySelectorAll('.price-offers__item');

         // изменяем площадь квартиры
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
        }
        // получаем тип ремонта
        for (var i = 0; i < checkRepairType.length; i++) {
            checkRepairType[i].addEventListener("click", function(){
            for (var j = 0; j < checkRepairType.length; j++) {
                checkRepairType[j].classList.remove('price-offers__item--active');
            }
          
            this.classList.add('price-offers__item--active');
            repairType = document.querySelectorAll('.price-offers__item--active')[0]; 
            })
        }
        
      function init() {
        calcButton.addEventListener("click", function(e){
            e.preventDefault();
            document.querySelectorAll('.calc-modal__rooms')[0].innerHTML = flatType.innerHTML;
            document.querySelectorAll('.calc-modal__repair')[0].innerHTML = repairType.children[1].innerHTML.split(" ")[0];
            document.querySelectorAll('.calc-modal__sq')[0].innerHTML = flatSq + ' м <sup>2</sup>';
            calcWindow.classList.add('visible');
          });
      }  
      var token = PubSub.subscribe( 'init', init );
  
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvdW50ZXIuanMiLCJjYWxjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgY29uc29sZS5sb2coJ0hlbGxvJyk7XHJcbn0pKCk7XHJcbiovXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XHJcblxyXG4gIFB1YlN1Yi5wdWJsaXNoKCAnaW5pdCcpO1xyXG4gIFxyXG4gIHZhciBvcmRlckJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLW9yZGVyJyksXHJcbiAgICAgIFxyXG4gICAgICBvcmRlcldpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcmRlci1tb2RhbCcpLFxyXG4gICAgICBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZScpLFxyXG4gICAgICB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ZpZGVvJyksXHJcbiAgICAgIHBsYXlQYXVzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFmZl9fdmlkZW8tcGxheScpO1xyXG5cclxuICAvLyDQvtGC0LrRgNGL0YLQuNC1INC4INC30LDQutGA0YvRgtC40LUg0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LBcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9yZGVyQnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3JkZXJCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBvcmRlcldpbmRvd1swXS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICB9KVxyXG4gIH07XHJcbiAgXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbG9zZUJ1dHRvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgY2xvc2VCdXR0b25baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICB9KVxyXG4gIH07XHJcbiBcclxuXHJcblxyXG4gIC8vINCh0LrRgNC40L/RgtGLINC00LvRjyDQstC40LTQtdC+XHJcbiAgcGxheVBhdXNlQnV0dG9uWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKHZpZGVvWzBdLnBhdXNlZCkge1xyXG4gICAgICB2aWRlb1swXS5wbGF5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2aWRlb1swXS5wYXVzZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcbiAgLy8g0JTQu9GPINGB0LvQsNC50LTQtdGA0LAg0YEg0L7RgtC30YvQstCw0LzQuCBcclxuXHJcbiAgdmFyIHNsaWRlckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJld2lld3NfX2l0ZW0nKSxcclxuICAgICAgcGFnaW5hdGlvbkl0ZW1zID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlLXBhZ2luYXRpb25fX2l0ZW0nKTtcclxuXHJcbiAgZm9yKHZhciBpPTA7IGk8cGFnaW5hdGlvbkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgcGFnaW5hdGlvbkl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFnaW5hdGlvbkl0ZW1zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgcGFnaW5hdGlvbkl0ZW1zW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2UtcGFnaW5hdGlvbl9faXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgICAgc2xpZGVySXRlbXNbal0uY2xhc3NMaXN0LnJlbW92ZSgncmV3aWV3c19faXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgncGFnZS1wYWdpbmF0aW9uX19pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgc2xpZGVySXRlbXNbdGhpcy5kYXRhc2V0Lm51bWJlcl0uY2xhc3NMaXN0LmFkZCgncmV3aWV3c19faXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgIFxyXG4gICAgICAvL3NsaWRlckl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoJ3Jld2lld3NfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICBcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgdmFyIGRldGFpbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmV3aWV3c19fZGV0aWwnKTtcclxuICAgIFxyXG4gIGZvcih2YXIgaT0wOyBpPGRldGFpbEJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIFxyXG4gICAgZGV0YWlsQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgIHZhciBhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJzJyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhhYnMpO1xyXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhYnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgYWJzW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2Ficy0tYWN0aXZlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnYWJzLS1hY3RpdmUnKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICBcclxuXHJcblxyXG4vLyDQodC10LrRhtC40Y8g0LLQvtC/0YDQvtGB0YtcclxuXHJcbnZhciBxdWVzdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucXVlc3Rpb25zX19pdGVtJyk7XHJcbnZhciBhbnN2ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucXVlc3Rpb25zX19hbnN3ZXJzJyk7XHJcblxyXG5mb3IodmFyIGk9MDsgaTxxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICBcclxuICBxdWVzdGlvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNoaWxkcmVuWzFdLCBudWxsKS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnRvZ2dsZSgncXVlc3Rpb25zX190ZXh0LS1hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC50b2dnbGUoJ3F1ZXN0aW9uc19fYW5zd2Vycy0tYWN0aXZlJyk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbn0pOyIsInZhciBDb3VudGVyID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIFxyXG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgdGhlbiA9IG5ldyBEYXRlICgyMDE3LCAxMSwgNyk7XHJcbiAgICB2YXIgc2Vjb25kTGVmdCA9IHRoZW4gLW5vdztcclxuICAgIHZhciBjb3VudGRvd24sIHNlY29uZExlZnQ7XHJcblxyXG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtVGltZShtcykge1xyXG5cclxuICAgICAgICB2YXIgZGF5TGVmdCA9IE1hdGguZmxvb3Ioc2Vjb25kTGVmdC84NjQwMDAwMCksXHJcbiAgICAgICAgICAgIGhvdXJzTGVmdCA9ICBNYXRoLmZsb29yKChzZWNvbmRMZWZ0JTg2NDAwMDAwKS8xMDAwLzYwLzYwKSxcclxuICAgICAgICAgICAgbWluTGVmdCA9IE1hdGguZmxvb3IoKChzZWNvbmRMZWZ0JTg2NDAwMDAwKSUzNjAwMDAwKS8xMDAwLzYwKSxcclxuICAgICAgICAgICAgc2VjTGVmdCA9IE1hdGguZmxvb3IoKCgoc2Vjb25kTGVmdCU4NjQwMDAwMCklMzYwMDAwMCklNjAwMDApLzEwMDApO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkYXlzOiBkYXlMZWZ0LFxyXG4gICAgICAgICAgICBob3VyczogaG91cnNMZWZ0LFxyXG4gICAgICAgICAgICBtaW51dGVzOiBtaW5MZWZ0LFxyXG4gICAgICAgICAgICBzZWM6ICAgc2VjTGVmdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5VGltZShzZWNvbmRMZWZ0KSB7XHJcblxyXG4gICAgICAgIHZhciBkYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RheXMnKSxcclxuICAgICAgICAgICAgbWludXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW51dGVzJyksXHJcbiAgICAgICAgICAgIGhvdXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdXJzJyksXHJcbiAgICAgICAgICAgIHNlYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWMnKTtcclxuXHJcbiAgICAgICAgdmFyIHRpbWVMZWZ0ID0gdHJhbnNmb3JtVGltZShzZWNvbmRMZWZ0KTtcclxuXHJcbiAgICAgICAgaWYgKHRpbWVMZWZ0LnNlYyA8IDEwKSB7XHJcbiAgICAgICAgICAgIHNlYy50ZXh0Q29udGVudCA9ICcwJyt0aW1lTGVmdC5zZWM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VjLnRleHRDb250ZW50ID0gdGltZUxlZnQuc2VjO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgICAgIG1pbnV0ZXMudGV4dENvbnRlbnQgPSB0aW1lTGVmdC5taW51dGVzO1xyXG4gICAgICAgICAgICBob3Vycy50ZXh0Q29udGVudCA9IHRpbWVMZWZ0LmhvdXJzO1xyXG4gICAgICAgICAgICBkYXlzLnRleHRDb250ZW50ID0gdGltZUxlZnQuZGF5cztcclxuICAgIH07XHJcbiAgXHJcbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvdW50ZG93biA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNlY29uZExlZnQgPSBNYXRoLnJvdW5kKCh0aGVuIC0gRGF0ZS5ub3coKSkpO1xyXG4gICAgICAgIGlmKHNlY29uZExlZnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwbGF5VGltZShzZWNvbmRMZWZ0KVxyXG4gICAgICAgICAgfSwxMDAwKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoICdpbml0JywgaW5pdCApO1xyXG5cclxufSkoKTsiLCJ2YXIgQ2FsYyA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICB2YXIgY2FsY0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjLWJ1dHRvbicpWzBdLFxyXG4gICAgICAgIGNhbGNXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsYy1tb2RhbCcpWzBdLFxyXG5cclxuICAgICAgICBzbGlkZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlVmFsdWUnKSxcclxuICAgICAgICBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyJyksXHJcblxyXG4gICAgICAgIGZsYXRTcSA9IHNsaWRlclswXS52YWx1ZSxcclxuICAgICAgICBmbGF0VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb29tcy1jb3VudF9faXRlbS0tYWN0aXZlJylbMF0sXHJcbiAgICAgICAgcmVwYWlyVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmljZS1vZmZlcnNfX2l0ZW0tLWFjdGl2ZScpWzBdLFxyXG5cclxuICAgICAgICBjaGVja0ZsYXRUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvb21zLWNvdW50X19pdGVtJyksXHJcbiAgICAgICAgY2hlY2tSZXBhaXJUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaWNlLW9mZmVyc19faXRlbScpO1xyXG5cclxuICAgICAgICAgLy8g0LjQt9C80LXQvdGP0LXQvCDQv9C70L7RidCw0LTRjCDQutCy0LDRgNGC0LjRgNGLXHJcbiAgICAgICAgc2xpZGVyWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBmbGF0U3EgPSBzbGlkZXJbMF0udmFsdWU7XHJcbiAgICAgICAgICAgIHNsaWRlVmFsdWVbMF0uaW5uZXJIVE1MID0gZmxhdFNxICsgJyDQvCA8c3VwPjI8L3N1cD4nO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vINC/0L7Qu9GD0YfQsNC10Lwg0LrQvtC70LjRh9C10YHRgtCy0L4g0LrQvtC80L3QsNGCXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGVja0ZsYXRUeXBlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNoZWNrRmxhdFR5cGVbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2hlY2tGbGF0VHlwZS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tGbGF0VHlwZVtqXS5jbGFzc0xpc3QucmVtb3ZlKCdyb29tcy1jb3VudF9faXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdyb29tcy1jb3VudF9faXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGZsYXRUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvb21zLWNvdW50X19pdGVtLS1hY3RpdmUnKVswXTsgXHJcbiAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g0L/QvtC70YPRh9Cw0LXQvCDRgtC40L8g0YDQtdC80L7QvdGC0LBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoZWNrUmVwYWlyVHlwZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjaGVja1JlcGFpclR5cGVbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2hlY2tSZXBhaXJUeXBlLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja1JlcGFpclR5cGVbal0uY2xhc3NMaXN0LnJlbW92ZSgncHJpY2Utb2ZmZXJzX19pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgncHJpY2Utb2ZmZXJzX19pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgcmVwYWlyVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmljZS1vZmZlcnNfX2l0ZW0tLWFjdGl2ZScpWzBdOyBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgY2FsY0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGMtbW9kYWxfX3Jvb21zJylbMF0uaW5uZXJIVE1MID0gZmxhdFR5cGUuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsYy1tb2RhbF9fcmVwYWlyJylbMF0uaW5uZXJIVE1MID0gcmVwYWlyVHlwZS5jaGlsZHJlblsxXS5pbm5lckhUTUwuc3BsaXQoXCIgXCIpWzBdO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsYy1tb2RhbF9fc3EnKVswXS5pbm5lckhUTUwgPSBmbGF0U3EgKyAnINC8IDxzdXA+Mjwvc3VwPic7XHJcbiAgICAgICAgICAgIGNhbGNXaW5kb3cuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gIFxyXG4gICAgICB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCAnaW5pdCcsIGluaXQgKTtcclxuICBcclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
