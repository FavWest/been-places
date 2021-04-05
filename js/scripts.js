// Business Logic

function Destination() {
  let places = {};
}

Destination.prototype.addPlace = function(place){
  this.place.location = place;
}

function place(location, landmark, season, notes){
  this.location = location;
  this.landmark = landmark;
  this.season = season;
  this.notes = notes;
}