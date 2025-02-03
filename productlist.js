const productContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  console.log(data);
  const markup = data
    .map(
      (product) => `<article>
        <a href="product.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
        alt="${product.productdisplayname}"
        class="image_container"/></a>
        <h2>${product.productdisplayname}</h2>
        <p>Category | ${product.category}</p>
        <p>${product.price}</p>
        <a href="product.html" class="add_to_bag"><p>ADD TO BAG</p></a>
        </article>
        `
    )
    .join("");
  console.log(markup);
  productContainer.innerHTML = markup;
}
