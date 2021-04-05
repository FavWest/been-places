// Business Logic

function Destination() {
  this.places = {};
}

Destination.prototype.addPlace = function(place){
  this.places[place.country] = place;
}

function place(country, landmark, season, notes){
  this.country = country;
  this.landmark = landmark;
  this.season = season;
  this.notes = notes;
}

place.prototype.formatPlaceString = function() {
  let descriptiveString = "";
  for (const key in this){
    if (this.hasOwnProperty(key)){
      descriptiveString += key + " " + this[key] + "\n";
    }   
  };
  return descriptiveString;
}
let destination = new Destination();
let italy = new place("Italy", "Duomo", "Summer", "These are notes");
destination.addPlace(italy);
console.log(italy.formatPlaceString());

