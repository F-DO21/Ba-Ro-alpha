// js/order.js
// email the reciever hello@BARO.com if it needs to be changed
const ORDER_ADDRESS = "orders@examplewebsite142.com";
const orderForm = document.querySelector(".product-order-form");

// Mailto Part 
function buildOrderMailto(subject, body) {
  return (
    "mailto:" + ORDER_ADDRESS +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body)
  );
}
orderForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const product = document.querySelector("#product-title").textContent.trim();
  const price = document.querySelector(".product-price").textContent.trim();
  const color = orderForm.querySelector("#product-color").value;
  const size = orderForm.querySelector("#product-size").value;
  const quantityText = orderForm.querySelector("#product-quantity").value;
  const quantity = Number(quantityText);

  if (color === "" || size === "") {
    alert("Please select a color and a size.");
    return;
  }
  if (quantityText === "" || !Number.isInteger(quantity) || quantity < 1) {
    alert("Please enter a quantity of 1 or more.");
    return;
  }
  // for the date the order is issued
  const orderDate = new Date().toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const subject = "Order: " + product + " (" + orderDate + ")";
  const body =
    "ORDER FORM\r\n" +
    "Date issued: " + orderDate + "\r\n\r\n" +
    "Product: " + product + "\r\n" +
    "Color: " + color + "\r\n" +
    "Size: " + size + "\r\n" +
    "Quantity: " + quantity + "\r\n" +
    "Price: " + price;

    // pop up message before going to the Order Form
  alert("Thank you for ordering! Your email app will open so you can send your order.");
  window.location.href = buildOrderMailto(subject, body);
  orderForm.reset();
});
