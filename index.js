"use strict";

var Chance = require('chance'),
	mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var chance1 = new Chance();

var emailSchema = new Schema({
	type: {
		type: String
	},
	value: {
		type: String
	}
});
var _contactSchema = new Schema({
	firstname : {
		type: String,
		default: '',
		trim: true
	},	
	lastname: {
		type: String,
		default: '',
		trim: true
	},
	email: [emailSchema]
});
var User = mongoose.model('User', _contactSchema);

module.exports = User;
/*
for(var i = 0; i <= 10; i++){
	var contact = new contacts({
		firstname: chance1.first(),
		lastname: chance1.last()
		
	});
	contact.save(function(error){
		if(error){
			throw error;
		}
		console.log("Inserted Successfully");
	});
}*/