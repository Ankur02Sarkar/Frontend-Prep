import { useState } from "react";

const usePassGen = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const generatePassword = (checkboxData, length) => {
    let charSet = "",
      generatedPassword = "";
    const selectedOptions = checkboxData.filter((checkbox) => checkbox.state);
    if (selectedOptions.length === 0) {
      setErrorMessage("Select atleast one Option");
      setPassword("");
      return;
    }
    selectedOptions.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charSet += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charSet += "0123456789";
          break;
        case "Include Symbols":
          charSet += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }
    setPassword(generatedPassword)
    setErrorMessage("")
  };
  return { password, errorMessage, generatePassword };
};

export default usePassGen;
