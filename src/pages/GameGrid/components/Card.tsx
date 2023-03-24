type CardProps = {
  id: number;
  emoji: string;
  flip: boolean;
  matched: boolean;
};

const Card = ({ id, emoji, flip, matched }: CardProps) => {
  return <div>Card</div>;
};

export default Card;
