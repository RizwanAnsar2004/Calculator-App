// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/
// Get the calculator field element
const textField = document.getElementById("field");

// Function to update the calculator field when a button is clicked
function updateField(value) {
  textField.value += value;
}

// Function to calculate and display the result
function calculateResult() {
  try {
    const result = eval(textField.value);
    if (Number.isFinite(result)) {
      textField.value = result;
    } else {
      textField.value = "Error";
    }
  } catch (error) {
    textField.value = "Error";
  }
}

// Clear the calculator field
function clearField() {
  textField.value = "";
}
function rt() {
  const a = Math.sqrt(textField.value);
  textField.value = null;
  return a;
}
function sqr() {
  const a = Math.pow(textField.value,2);
  textField.value = null;
  return a;
}
// Attach click event listeners to buttons
document
  .getElementById("zero")
  .addEventListener("click", () => updateField("0"));
document
  .getElementById("one")
  .addEventListener("click", () => updateField("1"));
document
  .getElementById("two")
  .addEventListener("click", () => updateField("2"));
document
  .getElementById("three")
  .addEventListener("click", () => updateField("3"));
document
  .getElementById("four")
  .addEventListener("click", () => updateField("4"));
document
  .getElementById("five")
  .addEventListener("click", () => updateField("5"));
document
  .getElementById("six")
  .addEventListener("click", () => updateField("6"));
document
  .getElementById("seven")
  .addEventListener("click", () => updateField("7"));
document
  .getElementById("eight")
  .addEventListener("click", () => updateField("8"));
document
  .getElementById("nine")
  .addEventListener("click", () => updateField("9"));
document
  .getElementById("point")
  .addEventListener("click", () => updateField("."));
document
  .getElementById("add")
  .addEventListener("click", () => updateField("+"));
document
  .getElementById("sub")
  .addEventListener("click", () => updateField("-"));
document
  .getElementById("mul")
  .addEventListener("click", () => updateField("*"));
document
  .getElementById("divide")
  .addEventListener("click", () => updateField("/"));
document
  .getElementById("sq")
  .addEventListener("click", () => updateField(sqr()));
document
  .getElementById("sqrt")
  .addEventListener("click", () => updateField(rt()));
document
  .getElementById("openP")
  .addEventListener("click", () => updateField("("));
document
  .getElementById("closeP")
  .addEventListener("click", () => updateField(")"));
document.getElementById("equals").addEventListener("click", calculateResult);
document.getElementById("field").addEventListener("click", clearField);
document.getElementById("clear").addEventListener("click", clearField);
