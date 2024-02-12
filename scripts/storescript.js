var products = [
  {
    name: "Signature Jeans - Straight",
    image: "/img/store/1130711007.png",
    price: "$100",
    tags: ["Mens wear", "Jeans", "Blue"]
  },
  {
    name: "Untility Cotton Overshirt",
    image: "/img/store/1126035007.png",
    price: "$100"
  },
  {
    name: "Stripped Wool and Yak-blend Jumper",
    image: "/img/store/1207881002.png",
    price: "$140"
  },
  {
    name: "Slouchy Nylon Messenger Bag",
    image: "/img/store/1149992004.png",
    price: "$80"
  },
  {
    name: "Pleated Wide-Leg Chambray Trousers",
    image: "/img/store/1206181002.png",
    price: "$100"
  },
  {
    name: "Collared Grained-Leather Jacket",
    image: "/img/store/1214349001.png",
    price: "$440"
  },
  {
    name: "Utility Trench Coat",
    image: "/img/store/1214350001.png",
    price: "$280"
  },
  {
    name: "Chunky Leather Chukka Shoes",
    image: "/img/store/1221404001.png",
    price: "$195"
  },
  {
    name: "Mohair West",
    image: "/img/store/1202718002.png",
    price: "$100"
  },
  {
    name: "Pleated Barrel-Leg Denim Trousers",
    image: "/img/store/1209789001.png",
    price: "$100"
  },
  {
    name: "Fold Micro Tote - Leather",
    image: "/img/store/1223541001.png",
    price: "$130"
  },
  {
    name: "Asymmetric Panelled Denim Midi",
    image: "/img/store/1208919001.png",
    price: "$170"
  }
];

var productContainer =  document.getElementById("product");

products.forEach(function(product) {
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

    productItem.appendChild(prodcutImage);
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);

    productContainer.appendChild(productItem);
});