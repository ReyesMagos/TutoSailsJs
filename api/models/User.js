/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	name:{
  		type:'string',
  		required:true,
  		defaultsTo:'John'
  	}, 

  	lastname:{
  		type:'string',
  		required:true,
  		defaultsTo:'Doe'

  	},
  	username:{
  		type:'string',
  		required:true,
  		unique:true
  	},
  	email:{
  		type:'email',
  		required:true
  	}


  }
};

