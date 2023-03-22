import React from "react";

type OptionButtonProps = {
  icon: React.ReactNode;
  title: string;
  active: string;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const OptionButton = ({
  icon,
  title,
  active,
  handleClick,
}: OptionButtonProps) => {
  return (
    <button
      style={{
        border: active === title ? "2px solid gold" : "1px solid white",
      }}
      onClick={handleClick}
      type="button"
      className="btn--new-game"
      title={title}
    >
      {icon}
    </button>
  );
};

export default OptionButton;
