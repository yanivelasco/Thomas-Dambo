// const url = "https://terithedesigner.dk/wp_td22/wp-json/wp/v2/employee?_embed";

// // fetch(url)
// //   .then((res) => res.json())
// //   .then((data) => handleProductList(data));

// async function getData() {
//   let result = await fetch(endpoint);
//   showProduct(await result.json());
// }


//   let number = -1;
//   function showProduct(product) {
//     product.forEach(() => {
//       console.log("name", product[1]);
//       number++;



// // function handleProductList(data) {
// //   console.log(data);
// //   data.forEach(showProduct);
// // }

// // function showProduct(product) {
//   const template = document.querySelector("template").content;
//   const clone = template.cloneNode(true);


//   clone.querySelector("h4").textContent = employee[number].position;
//   clone.querySelector("img").src =
//     product[number]._embedded[
//       "wp:featuredmedia"
//     ][0].media_details.sizes.medium.source_url;

//   const parent = document.querySelector(".family");

//   parent.appendChild(clone);
// })}


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
  // clone.querySelector("img").src =
  //   product._embedded[
  //     "wp:featuredmedia"
  //   ][0].media_details.sizes.medium.source_url;
  clone.querySelector("img").src =
      product._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.full.source_url;

    

  const parent = document.querySelector(".family");

  parent.appendChild(clone);
}