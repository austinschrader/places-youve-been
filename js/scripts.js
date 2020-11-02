// Back End Logic
// Initialize Places() object
function DestinationsList() {
	this.locations = [];
}

// Add a Location
DestinationsList.prototype.addLocation = function (location) {
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

		// Initialize objects & push user input to those objects
		let destinationsList = new DestinationsList();
		let location = new Location(userCountry, userCity, userDate);
		destinationsList.addLocation(location);

		$('.userResults').append(
			'<li>' + destinationsList.locations[0].country + '</li>'
		);
		$('.userResults').append(
			'<li>' + destinationsList.locations[0].city + '</li>'
		);
		$('.userResults').append(
			'<li>' + destinationsList.locations[0].date + '</li>'
		);
	});
});
