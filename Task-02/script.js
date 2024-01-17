const product = [
  {
    id: 1,
    image: "images/shoe-1.png",
    title: "MENS SHOES DN 23XX",
    price: 104,
  },
  {
    id: 2,
    image: "images/shoe-6.png",
    title: "WOMENS SHOES DN 33XX",
    price: 122,
  },
  {
    id: 3,
    image: "images/shoe-2.png",
    title: "MENS SHOES DN 21XX",
    price: 113,
  },
  {
    id: 4,
    image: "images/shoe-7.png",
    title: "WOMENS SHOES DN 13XX",
    price: 110,
  },
  {
    id: 5,
    image: "images/shoe-3.png",
    title: "MENS SHOES DN 14XX",
    price: 123,
  },
  {
    id: 6,
    image: "images/shoe-5.png",
    title: "MENS SHOES DN 28XX",
    price: 108,
  },
  {
    id: 7,
    image: "images/shoe-8.png",
    title: "WOMENS SHOES DN 23XX",
    price: 109,
  },
  {
    id: 8,
    image: "images/shoe-4.png",
    title: "MENS SHOES DN 18XX",
    price: 119,
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item, i) => {
    var { image, title, price } = item;
    return `<div class='box'>
          <div class='img-box'>
              <img class='images' src=${image}></img>
          </div>
          <div class='bottom'>
              <p>${title}</p>
              <h2>$ ${price}.00</h2>
              <button onClick='addtocart(${i})'>Add to Cart</button>
          </div>
      </div>`;
  })
  .join("");

var cart = [];
// ================ adding new items =================//
function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
// ============= delete items ===================//
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}
// ============= display cart =================//
function displaycart(a) {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;

  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty.";
    document.getElementById("total").innerHTML = " $ " + 0 + ".00"; // total item in cart
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "$ " + total + ".00"; // total price of cart items
        return (
          `<div class='cart-item'>
            <div class='row-img'>
                <img class='rowimg' src=${image}>
            </div>
            <p style='font-size:12px;'>${title}</p>

            <h2 style='font-size:15px;'>${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onClick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
