"use client";

import { useEffect, useState } from "react";

export function TypingText({
  texts,
  speed = 70,
  className = "",
}: {
  texts: string[];
  speed?: number;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx(charIdx + 1);
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (charIdx > 0) {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx(charIdx - 1);
        } else {
          setDeleting(false);
          setTextIdx((textIdx + 1) % texts.length);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, textIdx, texts, speed]);

  return (
    <span className={`text-gradient ${className}`}>
      {displayed}
      <span className="animate-pulse" aria-hidden>
        |
      </span>
    </span>
  );
}
