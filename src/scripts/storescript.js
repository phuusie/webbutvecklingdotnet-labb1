var products = [
  {
    name: "Signature Jeans - Straight",
    image: "../image/shop/mens/1130711007.png",
    price: "$100",
    tags: ["Men", "Jeans"]
  },
  {
    name: "Untility Cotton Overshirt",
    image: "../image/shop/mens/1126035007.png",
    price: "$100"
  },
  {
    name: "Stripped Wool and Yak-blend Jumper",
    image: "../image/shop/mens/1207881002.png",
    price: "$140"
  },
  {
    name: "Slouchy Nylon Messenger Bag",
    image: "../image/shop/mens/1149992004.png",
    price: "$80"
  },
  {
    name: "Pleated Wide-Leg Chambray Trousers",
    image: "../image/shop/mens/1206181002.png",
    price: "$100"
  },
  {
    name: "Collared Grained-Leather Jacket",
    image: "../image/shop/mens/1214349001.png",
    price: "$440"
  },
  {
    name: "Utility Trench Coat",
    image: "../image/shop/mens/1214350001.png",
    price: "$280"
  },
  {
    name: "Chunky Leather Chukka Shoes",
    image: "../image/shop/mens/1221404001.png",
    price: "$195"
  },
  {
    name: "Mohair West",
    image: "../image/shop/womens/1202718002.png",
    price: "$100"
  },
  {
    name: "Pleated Barrel-Leg Denim Trousers",
    image: "../image/shop/womens/1209789001.png",
    price: "$100"
  },
  {
    name: "Fold Micro Tote - Leather",
    image: "../image/shop/womens/1223541001.png",
    price: "$130"
  },
  {
    name: "Asymmetric Panelled Denim Midi",
    image: "../image/shop/womens/1208919001.png",
    price: "$170"
  }
];

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

    updateBagUI();
  }
}

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

  productItem.appendChild(prodcutImage);
  productItem.appendChild(productName);
  productItem.appendChild(productPrice);
  productItem.appendChild(addToBagButton);

  productContainer.appendChild(productItem);
});
