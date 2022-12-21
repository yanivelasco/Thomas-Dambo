// MENU

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// DATA BASE

const url = "https://terithedesigner.dk/wp_td22/wp-json/wp/v2/employee?_embed";

fetch(url)
  .then((res) => res.json())
  .then((data) => handleProductList(data));

function handleProductList(data) {
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector("h4").textContent = product.title.rendered;
  clone.querySelector("h5").textContent = product.position;
  clone.querySelector("img").src =
    product._embedded[
      "wp:featuredmedia"
    ][0].media_details.sizes.full.source_url;

  const parent = document.querySelector(".family");

  parent.appendChild(clone);
}
