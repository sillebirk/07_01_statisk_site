const productContainer = document.querySelector(".product_list_container");

const getString = window.location.search;

const getSearch = new URLSearchParams(getString);

const category = getSearch.get("category");

const header = document.querySelector(".header");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=5000`) // Når limit-tallet ændres skifter antallet af viste varer på siden
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  console.log(data);
  const markup = data
    .map(
      (product) => `
      <section class="smallProduct ${product.discount && "OnSale"}">
      <a href="product.html?id=${product.id}"><img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
      alt="${product.productdisplayname}"
      class="image_container"
      style="${product.soldout ? "opacity: 0.4;" : ""}"/></a>
      
      <p class="brand">${product.brandname}</p>
      <h2>${product.productdisplayname}</h2>
      <p>${product.price},00 DKK</p>
      <span class="sold_out ${product.soldout && "sold_out_on_img"}">Sold Out </span>
      <span class="sale ${product.discount && "sale_on_img"}">Sale : ${product.discount} % </span>
      <a href="product.html?id=${product.id}" class="add_to_bag"><p>ADD TO BAG</p></a>
      </section>
        `
    )
    .join("");
  console.log(markup);
  productContainer.innerHTML = markup;
  header.textContent = `${category}`;
}
