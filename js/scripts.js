// Back End Logic
// Initialize Places() object
function Places() {
	this.locations = [];
}

// Add a Location
Places.prototype.addLocation = function (location) {
	this.locations.push(location);
};

// Business Logic for Locations
function Location(country, city, date) {
	this.country = country;
	this.city = city;
	this.date = date;
}

Location.prototype.country = function () {
	return this.city + ' , ' + this.country;
};

// Front End Logic
$(document).ready(function () {
	$('#formOne').submit(function () {
		event.preventDefault();
		let userInput = $('#userInput').val();
		$('.userResults').append(userInput);
		numberTo(userInput);
	});
});
