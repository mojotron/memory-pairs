import "../styles/Grid.css";
import Card from "./Card";

const Grid = ({ cards, handleSelectCard }) => {
  return (
    <section className="Grid" data-testid="grid">
      {cards.map((card) => (
        <Card key={card.id} handleSelectCard={handleSelectCard} data={card} />
      ))}
    </section>
  );
};

export default Grid;
