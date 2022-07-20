import "../styles/Card.css";

const Card = ({ status }) => {
  return (
    <div title="card" className="Card">
      {status && <p>Card</p>}
    </div>
  );
};

export default Card;
