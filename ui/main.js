var button = document.getElementById('counter')
var counts = 0

button.onClick = function(){
    counts = counts + 1 ;
  var span = document.getElementById('count');
  span.innerTEXT = counts.toString();
}