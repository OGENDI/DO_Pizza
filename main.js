function pizza(getSize, getCrust, getCheese, getQuantity) {
  this.getSize = getSize;
  this.getCrust = getCrust;
  this.getCheese = getCheese;
  this.getQuantity = getQuantity;
}

// var userInput = new Order(getSize(), getCrust(), getCheese(), getQuantity());

function getSize() {
  var size = document.getElementById("pizzaSize").value;
  return parseInt(size);
}

function getCrust() {
  var crust = document.getElementById("pizzaCrust").value;
  return parseInt(crust);
}

function getCheese() {
  var cheese = document.getElementById("pizzaCheese").value;
  return parseInt(cheese);
}

function getQuantity() {
  var number = document.getElementById("quantity").value;
  return parseInt(number);
}

function totalAmount() {
  var totals = (getSize() + getCrust() + getCheese()) * getQuantity();
  alert("You ordered : " + getQuantity() + " pizza, amounting to " + totals);
}


