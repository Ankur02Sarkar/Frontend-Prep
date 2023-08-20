import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./ProgressBar";

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);
  return (
    <>
      <ProgressBar
        value={value}
        onComplete={() => {
          setSuccess(true);
        }}
      />
      <span>{success ? "Complete!" : "Loading"}</span>
    </>
  );
}

export default App;
