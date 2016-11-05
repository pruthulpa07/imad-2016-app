var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/jan-form', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jan-form.html'));
});

app.get('/audio_file.mp3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'audio_file.mp3'));
});
    
    app.get('/shadi.mp3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'shadi.mp3'));
});

app.get('/kaam.mp3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'kaam.mp3'));
});

app.get('/form.mp3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'form.mp3'));
});

app.get('/kya_kare.mp3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'kya_kare.mp3'));
});

app.get('/database', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'database.html'));
});

app.get('/janformbeta', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'janformbeta.html'));
});

app.get('/adminer', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'adminer.php'));
});


var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString())
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/modi.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'modi.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
