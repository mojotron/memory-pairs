import "../styles/Grid.css";
import Card from "./Card";

const Grid = ({ cards, handleSelectCard }) => {
  return (
    <section className="Grid">
      {cards.map((card) => (
        <Card key={card.id} handleSelectCard={handleSelectCard} data={card} />
      ))}
    </section>
  );
};

export default Grid;
