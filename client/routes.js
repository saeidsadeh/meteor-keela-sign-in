
import '../imports/ui/keela/frontend_login.html';
import '../imports/ui/keela/frontend_login.js';
import '../imports/ui/keela/frontend_signup.html';
import '../imports/ui/keela/frontend_signup.js';
import '../imports/ui/keela/frontend_home.html';




Router.route ('/', function() {
  this.render('crmhome');
});

Router.route ('/home', function() {
  this.render('crmhome');
});

Router.route ('/login', function() {
  this.render('login');
});

Router.route ('/signup', function() {
  this.render('signup');
});


