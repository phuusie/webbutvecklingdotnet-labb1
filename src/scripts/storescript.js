var productContainer = document.getElementById("product");

products.forEach(function (product) {
  var productItem = document.createElement("div");
  productItem.classList.add("product-item", "m-3");

  var prodcutImage = document.createElement("img");
  prodcutImage.src = product.image;
  prodcutImage.alt = product.name;
  prodcutImage.classList.add("product-image");

  var productName = document.createElement("p");
  productName.textContent = product.name;
  productName.classList.add("product-name");

  var productPrice = document.createElement("p");
  productPrice.textContent = product.price;
  productPrice.classList.add("product-price");

  var addToBagButton = document.createElement("img");
  addToBagButton.src = "../image/assets/bag-icon.png";
  addToBagButton.alt = "Add to bag";
  addToBagButton.classList.add("add-to-bag-button", "btn", "border", "icon");

  addToBagButton.addEventListener("click", function () {
    addToBag(product);
  });

  prodcutImage.addEventListener("click", function () {
    openModal(product);
  });

  productItem.appendChild(prodcutImage);
  productItem.appendChild(productName);
  productItem.appendChild(productPrice);
  productItem.appendChild(addToBagButton);

  productContainer.appendChild(productItem);
});

var shoppingBag = [];
function updateBagUI() {}

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

function openModal(product) {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";

  var modalTitle = document.getElementById("productModalLabel");
  modalTitle.textContent = product.name;

  var modalImage = document.getElementById("modalProductImage");
  modalImage.src = product.image;

  var modalName = document.getElementById("modalProductName");
  modalName.textContent = product.name;

  var modalPrice = document.getElementById("modalProductPrice");
  modalPrice.textContent = product.price;

  var modalDescription = document.getElementById("modalProductDescription");
  modalDescription.textContent = product.description;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
};

window.onclick = function () {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
