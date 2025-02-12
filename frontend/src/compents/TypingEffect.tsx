import { useState, useEffect } from "react";
import "./TypingEffect.css"; // Importando o CSS

interface TypingEffectProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

export default function TypingEffect({
  text,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 2000,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const handleTyping = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else if (index === text.length) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (index === 0) {
        setIsDeleting(false);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(handleTyping);
  }, [index, isDeleting, text, typingSpeed, deletingSpeed, delay]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <h1 className="typing-container">
      {displayedText}
      <span className="cursor">{cursorVisible ? "|" : " "}</span>
    </h1>
  );
}
