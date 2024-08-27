// Function to encrypt text
function encrypt() {
  const normalText = document.getElementById("normalText").value;
  let secretKey = document.getElementById("secretKey").value || "hello world";

  if (!normalText) {
    alert("Please enter text to encrypt.");
    return;
  }

  const encryptedText = CryptoJS.AES.encrypt(normalText, secretKey).toString();
  document.getElementById("result").value = encryptedText;
}

// Function to decrypt text
function decrypt() {
  const encryptedText = document.getElementById("normalText").value;
  let secretKey = document.getElementById("secretKey").value || "hello world";

  if (!encryptedText) {
    alert("Please enter text to decrypt.");
    return;
  }

  try {
    const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

    if (!decryptedText) {
      throw new Error("Invalid secret key or encrypted text.");
    }

    document.getElementById("result").value = decryptedText;
  } catch (error) {
    alert("Invalid secret key or encrypted text.");
    document.getElementById("result").value = "";
  }
}
