var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
if(request.readyState==XMLHttpRequest.DONE){
    if(request.status==200){
        var counter=request.responseText;
         var element=document.getElementById('count');
    element.innerHTML=counter.toString();
        
    }
}
    }
request.open('GET','http://localhost:8080/counter',true);
    request.send('null');
}
