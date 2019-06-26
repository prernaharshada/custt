var express = require('express');
var app =express();

var customerController = function(req,res){
console.log("Calling rest api");
var customers = [
			{FirstName: 'Ravi',lastName : 'Tambade', CustomerAge :20 },
			{FirstName: 'Prashant',lastName : 'Karhale', CustomerAge :23 },
			{FirstName: 'Rohit',lastName : 'Puranik', CustomerAge :25 },
			{FirstName: 'Shiv',lastName : 'Kumar', CustomerAge :28 },
			{FirstName: 'Manoj',lastName : 'Pande', CustomerAge :30 },
			];
	res.send(customers);
	};
	
app.get('/customers',customerController );

var server = app.listen(8088,function(){
var host =server.address().address
var port =server.address().port
console.log("Your Application is listening on http://localhost:8088 ",host,port)
})	
			
