import "../styles/Card.css";

const Card = ({ handleSelectCard, data }) => {
  return (
    <div className="Card">
      {!data.flip ? (
        <div
          title="card"
          className="Card__back"
          onClick={() => handleSelectCard(data.id)}
        ></div>
      ) : (
        <div title="card" className="Card__front">
          <span className="Card__emoji">{data.emoji}</span>
        </div>
      )}
    </div>
  );
};

export default Card;
