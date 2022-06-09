import MemoryCard from "./MemoryCard";

const Board = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => (
        <MemoryCard
          key={card.id}
          name={card.name}
          emoji={card.emoji}
          id={card.id}
        />
      ))}
    </div>
  );
};

export default Board;
