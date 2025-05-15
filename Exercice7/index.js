function convertToBinary() {
  const decimalInput = document.getElementById("decimalInput").value;
  try {
    // Check if the input is a number
    if (isNaN(decimalInput)) {
      return;
    }

    let decimal = parseInt(decimalInput);

    let binary = "";

    if (decimal === 0) {
      binary = "0";
    } else {
      while (decimal > 0) {
        const reste = decimal % 2;
        binary = reste + binary;
        decimal = Math.floor(decimal / 2);
      }
    }
    document.getElementById(
      "binaryResult"
    ).textContent = `Résultat en binaire : ${binary}`;
  } catch (error) {
    return;
  }
}
