import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HelloWorld />
    </div>
  );
}

export default App;
