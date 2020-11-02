// Back End Logic
// Initialize Places() object
function DestinationsList() {
	this.locations = [];
}

DestinationsList.prototype.findLocation = function (userCountry) {
	for (let i = 0; i < this.locations.length; i++) {
		if (this.locations[i].userCountry == userCountry) {
			$('.userResults').text(
				'<li>' + destinationsList.locations[i].userCountry + '</li>',
				'<li>' + destinationsList.locations[i].userCity + '</li>',
				'<li>' + destinationsList.locations[i].userDate + '</li>'
			);
		}
	}
};

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
		$('.userResults')
			.empty()
			.append(
				'<li>' +
					destinationsList.locations[q].userCountry +
					'</li>' +
					'<li>' +
					destinationsList.locations[q].userCity +
					'</li>' +
					'<li>' +
					destinationsList.locations[q].userDate +
					'</li>'
			);

		if (userCountry != '') {
			$('.userResults').append('<img src="img/' + userCountry + '.jpg">');
		}

		q = q += 1;
	});

	$('#formTwo').submit(function () {
		event.preventDefault();
		let locationToFind = $('#searchCountry').val();
		destinationsList.findLocation(locationToFind);
	});
});
