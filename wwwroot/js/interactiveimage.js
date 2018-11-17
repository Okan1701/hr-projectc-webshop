// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var cssSelectorBottom1 = anime({
    targets: '#cssSelectorbottom1',
    translateX: "1em",
    translateY: "9em",
    opacity: 1,
    easing: 'linear',
    delay: 1000,
    duration: 2000
  });

var cssSelectorBottom2 = anime({
  targets: '#cssSelectorbottom2',
  translateX: "-1em",
  translateY: "9em",
  opacity: 1,
  easing: 'linear',
  delay: 1000,
  duration: 2000
});
    

var imgs = ['/images/category.png',
'https://via.placeholder.com/150',            
'https://via.placeholder.com/300',
'https://via.placeholder.com/150',            
'https://via.placeholder.com/300',
'https://via.placeholder.com/150',            
'https://via.placeholder.com/300',
'https://via.placeholder.com/150',            
'https://via.placeholder.com/300',
'https://via.placeholder.com/150',            
'https://via.placeholder.com/300'

            ];

var text = [
'1',
'2',
'3',
'4',
'3',
'6',
'7',
'8',
'9',
'10'
 

];
  
var container = document.getElementsByClassName('category');
for(var i=0; i<container.length; i++) {
  var img = document.createElement('img');
  img.src = imgs[i]; // img[i] refers to the current URL.
  var h = document.createElement('H1');
  var t = document.createTextNode(text[i]);
  container[i].appendChild(t);
  container[i].appendChild(img);
  
}
// for (var i = 0, j = imgs.length; i < j; i++) {
//   var img = document.createElement('img');
//   img.src = imgs[i]; // img[i] refers to the current URL.
//   container.appendChild(img);
// }