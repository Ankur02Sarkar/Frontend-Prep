import React from "react";
const PasswordStrengthIndicator = ({ password = "" }) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;
    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 4) {
      return "Weak";
    } else if (passwordLength < 8) {
      return "Poor";
    } else if (passwordLength < 12) {
      return "Medium";
    } else if (passwordLength < 16) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };
  const passStrength = getPasswordStrength();
  if (!passStrength) return <React.Fragment />;
  return (
    <div>
      Strength : <span style={{ fontWeight: "bold" }}>{passStrength}</span>
    </div>
  );
};

export default PasswordStrengthIndicator;
