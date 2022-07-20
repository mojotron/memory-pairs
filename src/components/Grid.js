import "../styles/Grid.css";
import Card from "./Card";

const Grid = ({ cards }) => {
  return (
    <section className="Grid">
      {cards.map((card) => (
        <Card key={card.id} />
      ))}
    </section>
  );
};

export default Grid;
