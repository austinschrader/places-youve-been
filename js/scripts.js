// Back End Logic
// Initialize Places() object
function Destinations() {
	this.locations = [];
}

// Add a Location
Destinations.prototype.addLocation = function (location) {
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
		let userCountry = $('#userCountry').val();
		let userCity = $('#userCity').val();
		let userDate = $('#userDate').val();

		console.log(userCountry, userCity, userDate);

		$('.userResults').append('<li>' + userCountry + '</li>');
		$('.userResults').append('<li>' + userCity + '</li>');
		$('.userResults').append('<li>' + userDate + '</li>');
		// numberTo(userInput);
	});
});
