import "../styles/Grid.css";
import Card from "./Card";

const Grid = ({ cards, handleSelectCard, size }) => {
  return (
    <section
      className="Grid"
      data-testid="grid"
      style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
    >
      {cards.map((card) => (
        <Card key={card.id} handleSelectCard={handleSelectCard} data={card} />
      ))}
    </section>
  );
};

export default Grid;
