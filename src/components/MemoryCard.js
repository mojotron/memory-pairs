import { useState } from "react";

const MemoryCard = ({ name, emoji, id }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (active) return;
    setActive(true);
  };

  return (
    <article
      className={active ? "MemoryCard active" : "MemoryCard"}
      data-id={id}
      onClick={handleClick}
    >
      <h3>{emoji}</h3>
    </article>
  );
};

export default MemoryCard;
