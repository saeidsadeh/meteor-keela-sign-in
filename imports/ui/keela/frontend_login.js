import { Template } from 'meteor/templating';
import { CRMUsers } from '../../api/keelaDBO';
import { Meteor } from 'meteor/meteor';
//import { Router } from '../../../client/routes';
import './frontend_login.html';


Template.login.events({
'submit .loginForm'(event) { ////new-room is the form class
  
  event.preventDefault();

  var target = event.target;
  var userName = target.frontendLoginUsername.value ;
  var password = target.frontendLoginPassword.value;
//var c = $("#frontend-signup-terms").val();

  if (userName != "") {
    var crmUser = CRMUsers.findOne({userName: userName});
    if (crmUser.password == password){
      Router.go('/home')
    }else{
      $("#message").html("Invalid username or password.");
    }

  }

}

});
