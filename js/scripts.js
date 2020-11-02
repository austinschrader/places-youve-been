// Back End Logic
// Initialize Places() object
function DestinationsList() {
	this.locations = [];
}

DestinationsList.prototype.findLocation = function (userCountry) {
	for (let i = 0; i < this.locations.length; i++) {
		if (this.locations[i].userCountry == userCountry) {
			$('.userResults')
				.empty()
				.append(
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

// Globally initialize destinationsList
let destinationsList = new DestinationsList();

let q = 0;

// Front End Logic
$(document).ready(function () {
	// Add items
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

		attachLocationListeners();

		q = q + 1;
	});

	// Search
	$('#formTwo').submit(function () {
		event.preventDefault();
		let locationToFind = $('#searchCountry').val();
		destinationsList.findLocation(locationToFind);
	});

	function attachLocationListeners() {
		$('ul.userResults').on('click', 'li', function () {
			let newUserCountry = prompt('New country: ');
			let newUserCity = prompt('New city: ');
			let newUserDate = prompt('New date: ');

			delete destinationsList.locations[q - 1].userCountry;
			delete destinationsList.locations[q - 1].userCity;
			delete destinationsList.locations[q - 1].userDate;

			destinationsList.locations[q - 1].userCountry = newUserCountry;
			destinationsList.locations[q - 1].userCity = newUserCity;
			destinationsList.locations[q - 1].userDate = newUserDate;

			// Append Modified Data
			$('.userResults')
				.empty()
				.append(
					'<li>' +
						destinationsList.locations[q - 1].userCountry +
						'</li>' +
						'<li>' +
						destinationsList.locations[q - 1].userCity +
						'</li>' +
						'<li>' +
						destinationsList.locations[q - 1].userDate +
						'</li>'
				);

			console.log(destinationsList.locations[q - 1].userCountry);
			console.log(destinationsList.locations[q - 1].userCity);
			console.log(destinationsList.locations[q - 1].userDate);
		});
	}
});
