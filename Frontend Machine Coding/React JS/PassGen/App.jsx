import { useState } from "react";
import "./App.css";
import usePassGen from "./hooks/usePassGen";
import PasswordStrengthIndicator from "./StrengthChecker";

function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const { password, errorMessage, generatePassword } = usePassGen();
  const handleCheckboxChange = (i) => {
    const updatedData = [...checkboxData];
    updatedData[i].state = !updatedData[i].state;
    setCheckboxData(updatedData);
  };
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {password && (
        <div
          className="header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="title">{password}</div>
          <button className="copy" onClick={handleCopy}>
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}
      <div className="charLength">
        <span style={{ display: "flex", justifyContent: "space-between" }}>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
          style={{ width: "100%" }}
        />
      </div>
      <div
        className="checkboxes"
        style={{ display: "grid", gridTemplateColumns: "auto auto" }}
      >
        {checkboxData.map((data, idx) => {
          return (
            <div key={idx}>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(idx)}
                checked={data.state}
              />
              <label>{data.title}</label>
            </div>
          );
        })}
      </div>
      <PasswordStrengthIndicator password={password} />
      {errorMessage && (
        <div
          style={{
            color: "red",
          }}
        >
          {errorMessage}
        </div>
      )}
      <button
        style={{ maxWidth: "max-content", margin: "auto" }}
        onClick={() => {
          generatePassword(checkboxData, length);
        }}
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;
