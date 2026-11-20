//contact page JS section 

const TO_ADDRESS = "hello@examplewebsite143.com";
const form = document.querySelector("#contact-form");

function buildMailto() {
  const name = document.querySelector("#contact-name").value;
  const email = document.querySelector("#contact-email").value;
  const topic = document.querySelector("#contact-topic").value;
  const message = document.querySelector("#contact-message").value;

  const subject = "Website message: " + topic;
  const body = 
    "Name: " + name + "\r\n" + 
    "Email: " + email + "\r\n\r\n" +
    message;

 // The layout for our email
  return (
    "mailto:" + TO_ADDRESS + 
    "?subject=" + encodeURIComponent(subject) + 
    "&body=" + encodeURIComponent(body)
  );
}

// The thank you pop up order.
form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you for your submission, " + document.querySelector("#contact-name").value + "! Your email app will open so you can send your message.");
  window.location.href = buildMailto();
});

//I've only done the JS file for the contact us page haven't really started with the product page