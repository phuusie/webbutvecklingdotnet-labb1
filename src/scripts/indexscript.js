document.addEventListener("DOMContentLoaded", function () {
  var navigationBar = document.createElement("div");
  navigationBar.id = "navigation-bar";
  navigationBar.className = "row";

  navigationBar.innerHTML = `
        <nav class="navbar navbar-expand-sm p-5 col">
            <div class="container-fluid">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a id="home-link" class="nav-link" href="./index.html">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a id="new-arrival-link" class="nav-link" href="./newarrivals.html">New Arrivals</a>
                    </li>
                    <li class="nav-item">
                        <a id="store-link" class="nav-link" href="./store.html">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a id="sale-link" class="nav-link" href="./sale.html">SALE</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="d-flex justify-content-center align-items-center col">
            <img id="img-logo" src="./src/image/assets/cos-logo.jpg" alt="cos-logo" />
        </div>
        <nav class="navbar navbar-expand-sm p-5 navbar-background col">
            <div class="container-fluid justify-content-end">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span class="material-symbols-outlined">favorite</span>
                    </a>
                </li>
                    <li class="nav-item dropdown" id="bag-dropdown-container">
                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span id="bag" class="material-symbols-outlined">shopping_bag</span>
                            <span id="bag-count" class="badge bg-dark border border-dark rounded-4">0</span>
                        </a>
                        <ul class="dropdown-menu border border-dark" aria-labelledby="navbarDropdown" id="bag-dropdown-menu">
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./login.html">Sign In</a>
                    </li>
                    <li class="nav-item">
                        <a id="contact-link" class="nav-link" href="./about.html">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="material-symbols-outlined">search</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    `;

  document.body.insertBefore(navigationBar, document.body.firstChild);

  var bagIcon = document.getElementById("bag");
  bagIcon.addEventListener("click", updateBagDropdown);
});

var shoppingBag = [];

function updateBagUI() {
  var bagQuantity = 0;

  shoppingBag.forEach(function (product) {
    bagQuantity += product.quantity;
  });

  var bagCount = document.getElementById("bag-count");
  bagCount.textContent = bagQuantity;
}

function addToBag(product) {
  var existingProduct = shoppingBag.find((item) => item.name == product.name);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    shoppingBag.push({
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1
    });
  }

  updateBagUI();
}

function removeFromBag(index) {
  shoppingBag.splice(index, 1);
  updateBagDropdown();
  updateBagUI();
}

function clearBag() {
  shoppingBag = [];
  updateBagUI();
}

function updateBagDropdown() {
  var dropdownMenu = document.getElementById("bag-dropdown-menu");
  dropdownMenu.innerHTML = "";

  shoppingBag.forEach(function (product, index) {
    var listItem = document.createElement("li");
    listItem.innerHTML = `<div class="d-flex align-items-center">
        <button class="btn btn-sm btn-outline-dark m-2" onclick="removeFromBag(${index})">
          <span class="material-symbols-outlined">delete</span>
        </button>
        <span>
          <a class="dropdown-item" href="#">${product.quantity} x ${product.name} - ${product.price}</a>
        </span>
      </div>`;
    dropdownMenu.appendChild(listItem);
  });

  if (shoppingBag.length === 0) {
    var emptyMessage = document.createElement("li");
    emptyMessage.classList.add("dropdown-item", "text-muted");
    emptyMessage.textContent = "Your shopping bag is empty";
    dropdownMenu.appendChild(emptyMessage);
  }

  var clearbtn = document.createElement("button");
  clearbtn.textContent = "Clear bag";
  clearbtn.classList.add("btn", "btn-dark", "m-2", "text-light");
  clearbtn.addEventListener("click", function () {
    clearBag();
  });
  dropdownMenu.appendChild(clearbtn);
}

document.addEventListener("DOMContentLoaded", function () {
  var bottomSection = document.createElement("div");
  bottomSection.id = "bottom-section";
  bottomSection.className = "row";

  bottomSection.innerHTML = `
        <div class="col-2">
            <ul id="information-ul-1" class="container-fluid information-ul"></ul>
        </div>
        <div class="col">
            <ul id="information-ul-2" class="container-fluid information-ul"></ul>
        </div>
        <div class="col m-3 d-flex align-items-start justify-content-end">
            <a href="#" class="text-decoration-none m-3">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-decoration-none m-3">
                <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="text-decoration-none m-3">
                <i class="fab fa-pinterest"></i>
            </a>
            <a href="#" class="text-decoration-none m-3">
                <i class="fab fa-spotify"></i>
            </a>
            <button id="sub-btn" class="btn btn-l border border-dark rounded-0 bg-dark text-light">
                Subscribe
            </button>
        </div>
    `;

  document.body.appendChild(bottomSection);

  const ul1 = document.getElementById("information-ul-1");
  linksGroup1.forEach((link) => {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.textContent = link.text;
    a.href = link.href;
    a.className = "nav-link";
    li.appendChild(a);
    ul1.appendChild(li);
  });

  const ul2 = document.getElementById("information-ul-2");
  linksGroup2.forEach((link) => {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.textContent = link.text;
    a.href = link.href;
    a.className = "nav-link";
    li.appendChild(a);
    ul2.appendChild(li);
  });
});

const linksGroup1 = [
  { text: "Contact Us", href: "./about.html" },
  { text: "Delivery Information", href: "#" },
  { text: "Returns & Refund", href: "#" },
  { text: "Customer Service", href: "#" },
  { text: "Payment", href: "#" },
  { text: "FAQs", href: "#" },
  { text: "Fit Guides", href: "#" },
  { text: "Size Guide", href: "#" },
  { text: "Privacy Notice", href: "#" },
  { text: "Cookie Notice", href: "#" },
  { text: "Cookie Settings", href: "#" }
];

const linksGroup2 = [
  { text: "Store Location", href: "#" },
  { text: "Student Discount", href: "#" },
  { text: "Sustainability", href: "#" },
  { text: "COS Resell", href: "#" },
  { text: "Product Care", href: "#" },
  { text: "About COS", href: "#" },
  { text: "Careers", href: "#" },
  { text: "Press", href: "#" }
];
