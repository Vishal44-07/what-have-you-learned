const express = require('express');
const bodyParser = require('body-parser'); 
const date = require(__dirname + '/date.js');

let projectitem = [];
let bodyitem = [];
let nameofdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
    
     let day = date()
    res.render('list', { listTitle: day, newaddeditems: bodyitem })
   
})



app.post('/', function(req, res){

let item = req.body.newitem;

if (req.body.list === 'projects'){
    projectitem.push(item);
    res.redirect('/projects');
} else {
    bodyitem.push(item);
    res.redirect('/')
}
})

app.get('/projects', function(req, res){
    res.render('list', {listTitle: 'projects', newaddeditems: projectitem })

})

app.get('/about', function(req, res){
    res.render('about')
})
app.post('/about', function(req, res){
    res.render('about')
})
app.post('/', function(req, res){
    res.render('list')
})

app.post('/projects', function(req, res){
    res.render('list', {listTitle: 'projects', newaddeditems: projectitem })
})

app.listen(3000, function () {
    console.log('server has started')
})

