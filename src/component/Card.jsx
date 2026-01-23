import "./Card.css";
import startFill from "../images/Star_fill.svg";
import start from "../images/Star.svg";

export default function Card({ coffee }) {
  return (
    <div className="card">
      {coffee.popular && <span className="popular-tag">popular</span>}
      <img src={coffee.image} alt={coffee.name} loading="lazy" />
      <div className="card-header">
        <h2 className="name">{coffee.name}</h2>
        <span className="price">{coffee.price}</span>
      </div>{" "}
      <div className="rating">
        {coffee.rating ? (
          <div>
            <img src={startFill} alt="startFill" /> {coffee.rating}
            <span className="votes">({coffee.votes} votes)</span>
          </div>
        ) : (
          <div>
            {" "}
            <img src={start} alt="start" /> No ratings
          </div>
        )}{" "}
        {!coffee.available && <span className="soldout">Sold Out</span>}
      </div>
    </div>
  );
}
