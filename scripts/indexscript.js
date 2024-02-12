const linksGroup1 = [
  { text: "Contact Us", href: "#" },
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

const ul1 = document.getElementById("information-ul-1");
const ul2 = document.getElementById("information-ul-2");

function createListItems(ul, links) {
  links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    li.appendChild(a);
    ul.appendChild(li);
  });
}

  createListItems(ul1, linksGroup1);
  createListItems(ul2, linksGroup2);