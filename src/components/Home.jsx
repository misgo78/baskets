import data from "../service/data.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const initialData = data;

  const [items, setItems] = useState(() => {
    const localData = localStorage.getItem("articles");
    return localData ? JSON.parse(localData) : initialData;
  });

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(items));
  }, [items]);

  const handleDelete = (itemName) => {
    const updatedItems = items.filter((item) => item.name !== itemName);
    setItems(updatedItems); // Mise à jour de l'état avec les articles restants
    console.log("Deleting:", itemName);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <img src={item.picture[0].pic1} alt={item.name} width="200" />
          <p>{item.content}</p>
          <p>Prix: {item.price} €</p>
          <p>Disponible: {item.online && item.stock > 0 ? "Oui" : "Non"}</p>
          <p>Stock: {item.stock}</p>
          <Link to={`/details/${item.name}`}>Voir les détails</Link>
          <button onClick={() => handleDelete(item.name)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
