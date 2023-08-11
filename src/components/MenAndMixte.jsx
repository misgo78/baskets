import data from "../service/data.json";
import { Link } from "react-router-dom";

function MenAndMixte() {
  const filteredData = data.filter(
    (item) => item.category === "h" || item.category === "mixte"
  );

  return (
    <div>
      {filteredData.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>

          <img src={item.picture[0].pic1} alt={item.name} width="200" />

          <p>{item.content}</p>
          <p>Prix: {item.price} €</p>
          <p>Disponible: {item.online && item.stock > 0 ? "Oui" : "Non"}</p>
          <p>Stock: {item.stock}</p>
          <Link to={`/details/${item.name}`}>Voir les détails</Link>
        </div>
      ))}
    </div>
  );
}

export default MenAndMixte;
