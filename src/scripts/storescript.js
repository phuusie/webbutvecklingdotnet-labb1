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
