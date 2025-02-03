const categoryContainer = document.querySelector(".category_list_container");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    categoryContainer.innerHTML = data
      .map(
        (category) => `
          <section class="category_item">
            <a href="productlist.html?category=${category.category}">${category.category}</a>
          </section>
        `
      )
      .join("");
  });
