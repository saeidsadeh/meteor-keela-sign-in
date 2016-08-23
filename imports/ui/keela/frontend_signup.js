import { Template } from 'meteor/templating';
import { CRMUsers } from '../../api/keelaDBO';
import { Meteor } from 'meteor/meteor';
//import { Router } from '../../../client/routes';
import './frontend_signup.html';



Template.signup.events({
'submit .signupForm'(event) { ////new-room is the form class
  
  event.preventDefault();

  var target = event.target;
  var password = target.frontendSignupPassword.value ;
  var confirmPassword = target.frontendSignupPassword2.value;
//var c = $("#frontend-signup-terms").val();


 if(password == confirmPassword){
   var user = new CRMUser();
    user.userName = target.frontendSignupUsername.value; 
    user.email = target.frontendSignupEmail.value;
    user.password = target.frontendSignupPassword.value;

    Meteor.call('saveUser', user, function (error, returnedUser) {
      if (error) {
        $("#message").html("Username already exists.");
        console.log(error.reason);
      } else {  
        Router.go('/home');
      }
    });
  
 }else{
  $("#message").html("Passwords do not match");
 }

}


});


