var express = require('express');
var router = express.Router();

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

	res.render('home',{title:'Home',user:user});
})
module.exports = router;
