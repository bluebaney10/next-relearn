"use client";
import { useState } from "react";

function useLocalStorageState(
  startingText: string,
  localStorageKey: string
): [string, (value: string) => void] {
  const [text, setText] = useState(
    typeof localStorage === "undefined"
      ? startingText
      : localStorage.getItem(localStorageKey) || ""
  );

  const handleChangeText = (value: string) => {
    setText(value);
    localStorage.setItem(localStorageKey, value);
  };

  return [text, handleChangeText];
}

export default useLocalStorageState;
