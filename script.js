function details() {
  let username = document.getElementById("name").value;
  let mobile = document.getElementById("number").value;
  let email = document.getElementById("mail").value;
  let place = document.getElementById("place").value;
  let starters = document.getElementById("starters").value || 0;
  let biryani = document.getElementById("biryani").value || 0;
  let pizza = document.getElementById("pizza").value || 0;
  let chinese = document.getElementById("chinese").value || 0;
  let deserts = document.getElementById("deserts").value || 0;
  let gst = document.getElementById("gst").value || 0;

  let values = [
    parseInt(starters),
    parseInt(biryani),
    parseInt(pizza),
    parseInt(chinese),
    parseInt(deserts),
    parseInt(gst)
  ];

  let sum = 0;

  for (let i = 0; i < values.length; i++) {
    sum = sum + values[i];
  }

  gst = (sum * gst) / 100;
  let total = gst + sum;

  let result =
    "Name: " +
    username +
    "<br><br>" +
    "Phone: " +
    mobile +
    "<br><br>" +
    "E-mail: " +
    email +
    "<br><br>" +
    "Place: " +
    place +
    "<br><br>" +
    "Amount Without Gst: " +
    sum +
    "<br><br>" +
    "Total Amount With GST: " +
    Math.round(total);

  document.getElementById("result").innerHTML = result;
}

function navSlide() {
  const nav = document.querySelector(".navBar");
  const contents = document.querySelector(".contents");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    contents.classList.toggle("nav-active");
    burger.classList.toggle("active");
  });
}

navSlide();
