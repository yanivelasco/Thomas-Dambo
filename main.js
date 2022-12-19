const url = "https://terithedesigner.dk/wp_td22/wp-json/wp/v2/employee?_embed";

fetch(url)
  .then((res) => res.json())
  .then((data) => handleProductList(data));


function handleProductList(data) {
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("family").content;
  const clone = template.cloneNode(true);


  clone.querySelector("h4").textContent = product.title;
  clone.querySelector("img").src =
    product._embedded[
      "wp:featuredmedia"
    ][0].media_details.sizes.medium.source_url;

  const parent = document.querySelector("family");

  parent.appendChild(clone);
}