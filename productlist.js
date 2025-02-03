const productContainer = document.querySelector(".product_list_container");

const getString = window.location.search;

const getSearch = new URLSearchParams(getString);

const category = getSearch.get("category");

const header = document.querySelector(".header");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=100`) // Når limit-tallet ændres skifter antallet af viste varer på siden
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  console.log(data);
  const markup = data
    .map(
      (product) => `
      <section>
        <a href="product.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
        alt="${product.productdisplayname}"
        class="image_container"/></a>
        <h2>${product.productdisplayname}</h2>
        <p>${product.price}DKK</p>
        <a href="product.html" class="add_to_bag"><p>ADD TO BAG</p></a>
      </section>`
    )
    .join("");
  console.log(markup);
  productContainer.innerHTML = markup;
  header.textContent = `${category}`;
}
