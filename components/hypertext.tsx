"use client";
import { useEffect } from "react";
import { useState } from "react";

export function Hypertext({
  children,
  texts,
}: {
  children: string;
  texts: string;
}) {
  const [letters, setLetter] = useState<string>(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?"
  );
  const [text, setText] = useState<string>(children);
  const [originalText, setOriginalText] = useState<string>(children);

  function randomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
  }

  function changeLetter(to: string, iteration: number) {
    let result: string[] = [];
    to.split("").forEach((letter, index) => {
      if (index < iteration) {
        result.push(to[index]);
      } else {
        result.push(randomLetter());
      }
    });
    return result.join("");
  }
  function changeLetterRevert(to: string, iteration: number) {
    let result: string[] = [];
    to.split("").forEach((letter, index) => {
      if (index < to.length-iteration) {
        result.push(randomLetter());
      } else {
        result.push(to[index]);
      }
    });
    console.log(result.join(""));
    return result.join("");
  }

  function changeTo(to: string, revert: boolean = false) {
    let iteration = 0;
    const interval = setInterval(() => {
      setText(
        revert ? changeLetterRevert(to, iteration) : changeLetter(to, iteration)
      );
      if (iteration >= to.length) {
        clearInterval(interval);
      }
      iteration += 1;
    }, 30);
  }

  return (
    <div
      onMouseEnter={() => changeTo(texts)}
      onMouseLeave={() => changeTo(originalText, true)}
    >
      {text}
    </div>
  );
}
