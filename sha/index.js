function generateHash() {
  var inputText = document.getElementById("inputText").value;
  var outputHash = sha256(inputText);
  document.getElementById("outputHash").value = outputHash;
}
