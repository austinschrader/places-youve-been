// Back End Logic
// Initialize Places() object
function DestinationsList() {
	this.locations = [];
	// this.currentId = 0;
}

DestinationsList.prototype.findLocation = function (userCountry) {
	for (let i = 0; i < this.locations.length; i++) {
		if (this.locations[i].userCountry == userCountry) {
			$('.userResults').append(
				'<li>' + destinationsList.locations[i].userCountry + '</li>'
			);
			$('.userResults').append(
				'<li>' + destinationsList.locations[i].userCity + '</li>'
			);
			$('.userResults').append(
				'<li>' + destinationsList.locations[i].userDate + '</li>'
			);
		}
	}
};

// Assign each location an ID
// DestinationsList.prototype.assignId = function () {
// 	this.currentId += 1;
// 	return this.currentId;
// };

// Add a Location
DestinationsList.prototype.addLocation = function (location) {
	// location.id = this.assignId();
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

let q = 0;

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

		// Append location
		$('.userResults').append(
			'<li>' + destinationsList.locations[q].userCountry + '</li>'
		);
		$('.userResults').append(
			'<li>' + destinationsList.locations[q].userCity + '</li>'
		);
		$('.userResults').append(
			'<li>' + destinationsList.locations[q].userDate + '</li>'
		);
		q = q += 1;
	});

	$('#formTwo').submit(function () {
		event.preventDefault();
		let locationToFind = $('#searchCountry').val();
		destinationsList.findLocation(locationToFind);
	});
});
