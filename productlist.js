const productContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(product) {
  console.log(product);
  let markup = "";
  product
    .map((product) => {
      markup += `<article>
        <a href="product.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
        alt="${product.productdisplayname}"
        class="image_container"/></a>
        <h2>${product.productdisplayname}</h2>
        <p>Category | ${product.category}</p>
        <p>${product.price} DKK</p>
        <a href="product.html" class="add_to_bag"><p>ADD TO BAG</p></a>
        </article>`;
    })
    .join("");
  console.log(markup);
  productContainer.innerHTML = markup;
}
