import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';


export const CRMUsers = new Mongo.Collection('crmUsers');

Meteor.methods({

  'saveUser'(user) {
    //debugger;
    user.save();
    return user;
  } 


});


CRMUser = Class.create({
  name: 'CRMUser',
  collection: CRMUsers,
  fields: {
    userName: {
      type: String
    },
    email: {
      type: String
    },
    password:{
      type: String
    }
  },
  behaviors: {
  timestamp: {
    hasCreatedField: true,
    createdFieldName: 'createdAt',
  }
},
  indexes: {
    userName: {
      fields: {
        userName: 1
      },
      options: {
        unique: true
      }
    }
  }
});






