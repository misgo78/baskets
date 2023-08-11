import data from "../service/data.json";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Details() {
  const { id } = useParams();

  const item = data.find((article) => article.name === id);
  if (!item) {
    return <div>Article introuvable</div>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <div>
        {Object.values(item.picture[0]).map((pic, index) => (
          <img
            key={index}
            src={pic}
            alt={`${item.name} ${index}`}
            width="200"
          />
        ))}
      </div>

      <p>{item.content}</p>
      <p>Prix: {item.price} €</p>
      <p>Disponible: {item.online && item.stock > 0 ? "Oui" : "Non"}</p>
      <p>Taille: {item.size.join(", ")}</p>
    </div>
  );
}

export default Details;
