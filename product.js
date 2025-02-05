const productId = new URLSearchParams(window.location.search).get("id");
const productContainer = document.querySelector(".productContainer");
console.log("sidenVises");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <img
    src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp"
    alt="produkt"
    class="image_container"
    />
    
    <section class="productDetails">
    <h2 
    class="productCategory">${data.category} | ${data.articletype}
    </h2>
    
    <h3 
    class="productInfo">${data.productdisplayname}
    </h3>
    
    <h4 
    class="productInfo"> ${data.brandname}
    </h4>
    
    <h4 
    class="productPrice"> ${data.price} DKK
    </h4>
    
    <label for="size">
    Choose a size : 
    <select name="size" id="size">
    <option value="35">35</option>
    <option value="36">36</option>
    <option value="37">37</option>
    <option value="38">38</option>
    <option value="39">39</option>
    <option value="40">40</option>
    <option value="41">41</option>
    </select>
    </label>
    
    <button class="buyButton">ADD TO BAG</button>
    
    <div class="divider"></div>
    <h2>Productinformation :</h2>
    <p class="productInfo"><strong>Color : </strong>${data.basecolour}</p>
    <p class="productInfo"><strong>Description : </strong>${data.description}</p>
    
    </section>
    <span class="sale ${data.discount && "sale_on_img_product"}">Sale : ${data.discount} % </span>

    <span class="sold_out ${data.soldout && "sold_out_on_img_product"}">Sold out</span>

    </main>
    `;
  });
