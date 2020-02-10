function getInputValue() {
  var inputVal = document.getElementById(
    "myInput"
  ).value;

  alert(
    "we will create a pyramid with # for you ! "
  );
  for (var i = 1; i <= inputVal; i++) {
    for (
      var k = 1;
      k <= inputVal - i+1;
      k++
    ) {
        document.write("&nbsp");
    }
    for (var j = 1; j <= i; j++) {
      document.write("# ");
    }
    document.write("<br/>");
  }
}
