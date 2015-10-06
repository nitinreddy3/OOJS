var diceSizeSix = {
  side: 6,
  roll: function () {
    var randomNumber = Math.floor( Math.random() * this.side) + 1;
    console.log(randomNumber);
  }
}

var diceSizeTen = {
  side: 10,
  roll: function () {
    var randomNumber = Math.floor( Math.random() * this.side) + 1;
    console.log(randomNumber);
  }
}
