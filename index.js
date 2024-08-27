// Function to encrypt text
function encrypt() {
  const normalText = document.getElementById("normalText").value;
  const secretKey = document.getElementById("secretKey").value;

  if (!normalText || !secretKey) {
    alert("Please enter both text and a secret key.");
    return;
  }

  const encryptedText = CryptoJS.AES.encrypt(normalText, secretKey).toString();
  document.getElementById("result").value = encryptedText;
}

// Function to decrypt text
function decrypt() {
  const encryptedText = document.getElementById("normalText").value;
  const secretKey = document.getElementById("secretKey").value;

  if (!encryptedText || !secretKey) {
    alert("Please enter both the encrypted text and a secret key.");
    return;
  }

  const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
  const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

  if (!decryptedText) {
    alert("Invalid secret key or text.");
    return;
  }

  document.getElementById("result").value = decryptedText;
}
