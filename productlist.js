const header = document.querySelector(".header");
const productContainer = document.querySelector(".product_list_container");

const getString = window.location.search;
const getSearch = new URLSearchParams(getString);
const category = getSearch.get("category");

let gemtData;
const filterSelecter = document.querySelector("#filter");
let filter = "all";

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=50`) // Når limit-tallet ændres skifter antallet af viste varer på siden
  .then((response) => response.json())
  .then((dataJSON) => {
    gemtData = dataJSON;
    showList(gemtData);
  });

function showList(data) {
  const filteredData = data.filter((product) => {
    if (filter === "all") {
      return true;
    } else if (filter === "sale") {
      return product.discount;
    }
  });

  const markup = filteredData
    .map(
      (product) => `
      <section class="smallProduct ${product.discount && "OnSale"}">
        <a href="product.html?id=${product.id}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" class="image_container" style="${product.soldout ? "opacity: 0.4;" : ""}"/>
        </a>
        <p class="brand">${product.brandname}</p>
        <h2>${product.productdisplayname}</h2>
        <p>
  ${product.discount ? `<span class="dashed">${product.price} DKK</span> <span class="newPrice">${(product.price * (1 - product.discount / 100)).toFixed(2)} DKK</span>` : `<span>${product.price} DKK</span>`}
        </p>
        <span class="sold_out ${product.soldout && "sold_out_on_img"}">Sold Out </span>
        <span class="sale ${product.discount && "sale_on_img"}">Sale : ${product.discount} % </span>
        <a href="product.html?id=${product.id}" class="add_to_bag">
          <p>ADD TO BAG</p>
        </a>
      </section>`
    )
    .join("");

  productContainer.innerHTML = markup;
  header.textContent = `${category}`;
}

filterSelecter.addEventListener("change", (event) => {
  filter = filterSelecter.value;
  console.log("filter", filter);
  showList(gemtData);
});
