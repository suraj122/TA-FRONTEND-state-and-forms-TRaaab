import React from "react";

function Product(props) {
  let productData = props.data.map((item) => item);
  if (props.sort.ascending) {
    productData = productData.sort((a, b) => a.price - b.price);
  } else if (props.sort.descending) {
    productData = productData.sort((a, b) => b.price - a.price);
  }
  if (props.filter.size !== "") {
    productData = productData.filter((product) =>
      product.availableSizes.includes(props.filter.size)
    );
  }

  return (
    <section className="product-wrapper">
      <ul className="prodcut-list">
        {productData.map((product) => (
          <li key={product.id}>
            <img src={`/images/products/${product.sku}_1.jpg`} alt="" />
            <h4>{product.title}</h4>
            <strong>${product.price}</strong>
            <div>
              <button>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Product;
