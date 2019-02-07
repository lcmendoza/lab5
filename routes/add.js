var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	res.render('index', data);

	var name = req.query.name;
	var description = req.query.description;

	var newFriend = {
		"name" : "New Friend",
		"description" : "Friend Description",
		"imageURL" : "http://lorempixel.com/400/400/people"
	};
	
	console.log(newFriend);
	data.friends.push(newFriend);

 } 