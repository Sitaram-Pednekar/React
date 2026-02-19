import { useEffect } from "react";

window.value = 0;

function Buttons() {
  useEffect(() => {
    const button1 = document.getElementById("A1");
    const button2 = document.getElementById("A2");
    const output = document.getElementById("A3");

    if (!button1 || !button2 || !output) return;

    output.innerHTML = `The value is ${window.value}`;

    const handleIncrement = () => {
      window.value++;
      output.innerHTML = `The value is ${window.value}`;
      console.log(window.value);
    };

    const handleDecrement = () => {
      window.value--;
      output.innerHTML = `The value is ${window.value}`;
      console.log(window.value);
    };

    button1.addEventListener("click", handleIncrement);
    button2.addEventListener("click", handleDecrement);

    // Cleanup
    return () => {
      button1.removeEventListener("click", handleIncrement);
      button2.removeEventListener("click", handleDecrement);
    };
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <button id="A1">Increment</button>
      <button id="A2">Decrement</button>
      <h2 id="A3">The value is 0</h2>
    </>
  );
}

export default Buttons;
