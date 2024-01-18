var days= document.getElementById('days');
var hours= document.getElementById('hours');
var minutes= document.getElementById('minutes');
var seconds= document.getElementById('seconds');
var miliseconds= document.getElementById('miliseconds');

var day_dot= document.querySelector('.day_dot');
var hr_dot= document.querySelector('.hr_dot');
var min_dot= document.querySelector('.min_dot');
var sec_dot= document.querySelector('.sec_dot');
var milisec_dot= document.querySelector('.milisec_dot');

var endDate = '20/09/2024 00:00:00 am';

var x =setInterval(function(){
  var now = new Date(endDate).getTime();
  var countDown = new Date().getTime();
  var distance = now - countDown;
  var d= Math.floor(distance / (1000 *60 *60 * 24));
var h= Math.floor((distance % (1000 *60 *60 * 24)) / (1000 * 60 * 60 ));
var m= Math.floor((distance % (1000 *60 *60 )) / (1000 * 60  ));
var s= Math.floor((distance % (1000 *60 )) / (1000));
var mm= Math.floor((distance % (1000 *60 )));

days.innerHTML= d 
hours.innerHTML= h 
minutes.innerHTML= m 
seconds.innerHTML= s 
miliseconds.innerHTML= mm

dd.style.strokeDashoffset = 440 -(440* d)/365;
hh.style.strokeDashoffset = 440 -(440* h)/24;
mm.style.strokeDashoffset = 440 -(440* m)/60;
ss.style.strokeDashoffset = 440 -(440* s)/60;
ms.style.strokeDashoffset = 440 -(440* mm)/60000;

day_dot.style.transform = `rotateZ(${d* 0.986}deg)`;
hr_dot.style.transform = `rotateZ(${h* 15}deg)`;
min_dot.style.transform = `rotateZ(${m* 6}deg)`;
sec_dot.style.transform = `rotateZ(${s* 6}deg)`;
milisec_dot.style.transform = `rotateZ(${ms* 0.0060}deg)`;

if(distance < 0){
  clearInterval(x);
  document.getElementById("time").style.display = 'none';
  document.querySelector(".hbd").style.display = 'block';
}

})