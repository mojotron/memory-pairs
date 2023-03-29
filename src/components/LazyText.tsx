import { useEffect, useState } from "react";
import { randomColorRGB } from "../helpers/randomColorRGB";

const LazyText = ({ text }: { text: string }) => {
  const [result, setResult] = useState<{ letter: string; color: string }[]>([]);
  const [letters, setLetters] = useState(text.split(""));

  useEffect(() => {
    if (letters.length === 0) return;

    const timer = setTimeout(() => {
      const newLetters = [...letters];
      const newResult = newLetters.shift() || "";
      setLetters(newLetters);
      setResult((oldValue) => [
        ...oldValue,
        {
          letter: newResult,
          color: randomColorRGB(),
        },
      ]);
    }, 100);

    return () => clearTimeout(timer);
  }, [letters]);

  return (
    <h2>
      {result.map((ele, i) => (
        <span key={i} style={{ color: ele.color }}>
          {ele.letter}
        </span>
      ))}
    </h2>
  );
};

export default LazyText;
