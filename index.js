const craigslist = require('./craigslist.js');

exports.handler = function(event, context, callback){
    craigslist(event).then(output => {
    	console.log("Output: ", output);
    	callback(null, output);
    });
    
};