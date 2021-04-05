// Business Logic

function Destination() {
  this.places = {};
}

Destination.prototype.addPlace = function(place){
  console.log(place.location);
  this.places[place.location] = place;
}

function place(location, landmark, season, notes){
  this.location = location;
  this.landmark = landmark;
  this.season = season;
  this.notes = notes;
}

let destination = new Destination();
let italy = new place("Italy", "Duomo", "Summer", "These are notes");
destination.addPlace(italy);
console.log(destination.places.Italy);