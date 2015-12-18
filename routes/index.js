var express = require('express');
var router = express.Router();
var http = require('http'); 
var jquery = require('jquery');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',function(req,res,nexe){
	res.render('login',{title:'用户登录'})
})
router.post('/login',function(req,res){
	var user = {
		username :'admin',
		password : '123456'
	}
	console.log('invoke login post method');
	if(req.body.username === user.username && req.body.password === user.password){
		res.redirect('/home');
	}

	res.redirect('/');
})

router.get('/logout',function(req,res,next){
	res.redirect('/');
})

router.get('/home',function(req,res){
	var user = {
		username:'admin',
		password:'123456'
	}
 
	var options = {  
	    host: 'bbs.hupu.com',
	    path:'/bxj',
	    headers: {
	        'Accept': 'text/html'
	    },
	    method: 'GET'
	    
	};
	var request = http.request(options, function(resp) {  
	    console.log('STATUS: ' + res.statusCode);
	    console.log('HEADERS: ' + JSON.stringify(res.headers));

	    // Buffer the body entirely for processing as a whole.
      var bodyChunks = [];
      resp.on('data', function(chunk) {
        // You can process streamed parts here...
        bodyChunks.push(chunk);
      }).on('end', function() {
        var body = Buffer.concat(bodyChunks);
        console.log('BODY: ' + body);
        // ...and/or process the entire body here.
      })
	});
	request.end();
	res.render('home',{title:'你关心的步行街头条！',user:user});
})
module.exports = router;
