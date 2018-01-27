 // craigslist.js
const craigslist = require('node-craigslist');

 module.exports = function(req){
 	return buildQuery(req).then(hitCraigslist).then(output => {
 		console.log("Output: ", output);
 		return output;
 	});
 }

 function buildQuery(req){
 	var client = new craigslist.Client({
 		city: 'dallas'
 	});
 	var options = {};
 	if(req.phone){
 		options.category = 'moa';
 	}

 	var query = {
 		client: client,
 		options: options,
 		search: req.phone
 	};
 	console.log("Query built: ", query);
 	return Promise.resolve(query);
 }

 function hitCraigslist(query){
 	console.log("Hitting craigslist");
 	return query.client.search(query.options, query.search).then(listings => {
 		console.log("Craigslist results are back");
 		listings.forEach((listing) => console.log(listing));
 		return listings;
 	})
 	.catch((err) => {
 		console.error(err);
 	});
 }