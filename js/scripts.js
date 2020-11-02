// Back End Logic
// Initialize Places() object
function DestinationsList() {
	this.locations = [];
	this.currentId = 0;
}

// Add a Location
DestinationsList.prototype.addLocation = function (location) {
	this.locations.push(location);
};

// Business Logic for Locations
function Location(userCountry, userCity, userDate) {
	this.userCountry = userCountry;
	this.userCity = userCity;
	this.userDate = userDate;
}

Location.prototype.userCountry = function () {
	return this.userCity + ' , ' + this.userCountry;
};

// Globally initialize destinationsList
let destinationsList = new DestinationsList();

// Front End Logic
$(document).ready(function () {
	$('#formOne').submit(function () {
		event.preventDefault();
		let userCountry = $('#userCountry').val();
		let userCity = $('#userCity').val();
		let userDate = $('#userDate').val();

		// Initialize location object and push location to destinationsList
		let location = new Location(userCountry, userCity, userDate);
		destinationsList.addLocation(location);
		// console.log(destinationsList);
		// console.log('The variable this is equal to : ');
		// console.log(this);

		// Append location
		$('.userResults').append(
			'<li>' + destinationsList.locations[0].userCountry + '</li>'
		);
		$('.userResults').append(
			'<li>' + destinationsList.locations[0].userCity + '</li>'
		);
		$('.userResults').append(
			'<li>' + destinationsList.locations[0].userDate + '</li>'
		);
	});
});
