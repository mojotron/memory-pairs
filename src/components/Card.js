import "../styles/Card.css";

const Card = ({ handleSelectCard, data }) => {
  // let cardClass;
  // if (data.matched) cardClass = "Card--front";
  // else if (data.flip) cardClass = "Card--flip";
  // else cardClass = "Card--back";

  return (
    <div title="card" className="Card">
      {!data.flip ? (
        <div
          className="Card__back"
          onClick={() => handleSelectCard(data.id)}
        ></div>
      ) : (
        <div className="Card__front">
          <span className="Card__emoji">{data.emoji}</span>
        </div>
      )}
    </div>
  );
};

export default Card;
