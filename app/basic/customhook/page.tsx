"use client";
import useLocalStorageState from "./hooks/useLocalStorageState";

function CustomHookPage() {
  /*  
 const [text, setText] = useState(
    typeof localStorage === "undefined"
      ? ""
      : localStorage.getItem("text") || ""
  );

  const handleChangeText = (value: string) => {
    setText(value);
    localStorage.setItem("text", value);
  }; 

  return (
    <>
      <div>CustomHookPage</div>
      <input value={text} onChange={(e) => handleChangeText(e.target.value)} />
    </>
  );

  */

  const [text, setText] = useLocalStorageState("", "text");
  return (
    <>
      <div>CustomHookPage</div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
}

export default CustomHookPage;
