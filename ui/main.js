var button = document.getElementById('counter')
var count = 0

button.onClick = function(){
    count = count + 1 ;
  var span = document.getElementById('count');
  span.innerHTML = count.toString();
}