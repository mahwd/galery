var arr = document.getElementsByClassName('menu');
function ch(a) {
for (var i = 0; i < arr.length; i++) {
  arr[i].style.background = 'none';
  }
  a.style.background = 'rgb(10, 186, 123)';
}
var imgArr = document.getElementsByClassName('items');
for (var i = 0; i < imgArr.length; i++) {
  imgArr[i].style.backgroundImage = 'url("./img/'+(i+1)+'.jpg")';
  imgArr[i].style.backgroundSize = "cover";
}
function define(a){
    document.getElementsByClassName('preview')[0].style.backgroundImage = a.style.backgroundImage;
    for (var i = 0; i < imgArr.length; i++) {
      imgArr[i].style.opacity = '0.5';
      }
      a.style.opacity = '1';
    }
