var assert = require('chai').assert;
var expect = require('chai').expect,
	mongoose = require('mongoose'),
	User = require('../index');

describe("User Model:::::Mongodb test", function(){
	beforeEach(function (done) {


		  function clearDB() {
		    /*for (var i in mongoose.connection.collections) {
		      mongoose.connection.collections[i].remove(function() {});
		    }
		    return done();**/
		    User.db.db.dropDatabase(function(error, result){

		    });
		    return done();
		  }


		if(mongoose.connection.readyState === 0) {
		    mongoose.connect("mongodb://localhost:27017/sampleTestsDev", function (err) {
		      if (err) {
		        throw err;
		      }
		      clearDB();
		    });
			} else {
			    clearDB();
		}
	});


	afterEach(function (done) {
	  mongoose.disconnect();
	  return done();
	});
	describe("User Create test", function(){

		it("Creating a new User into mongodb", function(){

			var newUser = {
				firstname: 'Aditya',
				lastname: 'V',
				email: [
					{
						type: 'home',
						value: 'ramaditya29@gmail.com'
					},
					{
						type: 'work',
						value: 'aveluturi@horizon.csueastbay.edu'
					}

				]
			};

			User.create(newUser, function(error, createdUser){
				if(error){

				}
				else {
					expect(createdUser.firstname).to.equal('Aditya');
					expect(createdUser.lastname).to.equal('V');
				}

			});
			//expect("Aditya").to.equal("Aditya");
		});

	});
});
describe("Basic Testing", function(){
	
	describe("Basic Testing -->Variables", function(){

		it("Checking the names", function(){
			assert.equal("Aditya", "Aditya");
		});
	});

});