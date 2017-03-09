$(document).ready(function() {

  // declare these in the outermost function scope so they're available everywhere in here
  var targetNumber;
  var counter;

  // utility function for generating random numbers - helps obfuscate complexity and make your life easier 👍
  function generateRandomNumber (min, max) {
    max -= min
    return Math.ceil(Math.random() * max) + min;
  };

  // anytime you need to reset the game values, you can just call this.
  function resetValues() {
    $("#crystals").empty();

    targetNumber = generateRandomNumber(19, 120);
    $("#number-to-guess").text(targetNumber);

    counter = 0;
    $("#user-count").text(counter);

    for (var i = 0; i < 4; i++) {
      var imageCrystal = $("<img>");
      imageCrystal.addClass("crystal-image");
      imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
      imageCrystal.attr("data-crystalvalue", generateRandomNumber(1, 12));
      $("#crystals").append(imageCrystal);
    }
  };

  // since the images are being dynamically generated,
  // you set the listener on the parent element ("#crystals"),
  // and then pass in the child target (".crystal-image")
  $("#crystals").on("click", ".crystal-image", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
    $("#user-count").text(counter);

    if (counter === targetNumber) {
      alert("You win!");
      resetValues();
    }
    else if (counter >= targetNumber) {
      alert("You lose!!");
      resetValues();
    }
  });

  // set all the values after the rest fo your script has been run.
  resetValues();

});
