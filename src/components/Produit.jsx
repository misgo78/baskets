import React from "react";

const Produit = ({ data }) => {
  const {
    name,
    category,
    brand,
    price,
    content,
    stock,
    online,
    avis,
    size,
    picture,
  } = data;

  return (
    <div className="produit">
      <img src={picture[0].pic1} alt={name} />
      <h2>{name}</h2>
      <p>{content}</p>
      <p>Brand: {brand}</p>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <p>Available Sizes: {size.join(", ")}</p>
      <p>Stock: {stock}</p>
      <p>Online: {online ? "Yes" : "No"}</p>
      <p>
        Average Rating: {avis.stars} stars ({avis.nb} reviews)
      </p>
      <div className="produit-images">
        {picture.map((pic, index) => (
          <img key={index} src={pic} alt={`${name} - ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Produit;
