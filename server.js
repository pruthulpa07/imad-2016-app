var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content = {
    title : 'Article ONE',
};

function createTemplate(data){
    var title = data.title
    var htmlTemplate = `<html>
    <head>
        <title>${title}</title>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>

     
    <body>
        <div>
            <a href ="/">Home</a>
        </div>
        <div>
            <h3>Article One</h3>
        </div>
        <hr>
        <div>
            <p>
                This is my first webapp...
            </p>
        </div>
    </body>
</html>`
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article_one',function(req, res){
    res.send(createTemplate(content));
});

app.get('/article_two',function(req, res){
    res.send('article two will be served here')
});

app.get('/article_three',function(req, res){
    res.send('article three will be served here')
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
