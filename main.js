function getInputValue() {
  var inputVal = document.getElementById(
    "myInput"
  ).value;

  // Displaying the pyramid
}
document.getElementById(
  "btn"
).onclick = function() {
  for (var i = 1; i <= inputVal; i++) {
    for (
      var k = 1;
      k <= inputVal - i;
      k++
    ) {
      document.write(" *");
    }
    for (var j = 1; j <= i; j++) {
      document.write("* ");
    }
    document.write("<br/>");
  }
};
