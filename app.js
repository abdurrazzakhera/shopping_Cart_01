function updateProductNumber(product, price, isIncrease) {
  const productNumber = document.getElementById(product + "_Number");
  let productnumberIncrease = productNumber.value;
  if (isIncrease == true) {
    productnumberIncrease = parseInt(productnumberIncrease) + 1;
  } else if (productnumberIncrease > 0) {
    productnumberIncrease = parseInt(productnumberIncrease) - 1;
  }
  productNumber.value = productnumberIncrease;
  const totalProductPirice = document.getElementById(product + "_Total");
  totalProductPirice.innerText = productnumberIncrease * price;
  calculation();
}
//get input value
function getInputValue(product) {
  const productInput = document.getElementById(product + "_Number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}
//Calculation all price
function calculation() {
  const phonePrice = getInputValue("phone") * 1219;
  const casePrice = getInputValue("case") * 59;
  const subTotal = phonePrice + casePrice;
  const tax = subTotal / 10;
  const totalPirce = subTotal + tax;

  document.getElementById("sub_Total").innerText = subTotal;
  document.getElementById("tax_Total").innerText = tax;
  document.getElementById("total").innerText = totalPirce;
}

//phone increase adecrease event listner
document.getElementById("phone_ButtonP").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});

document.getElementById("phone_ButtonN").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});

//case increase decrease eventListener
document.getElementById("case_buttonP").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});
document.getElementById("case_ButtonN").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});
