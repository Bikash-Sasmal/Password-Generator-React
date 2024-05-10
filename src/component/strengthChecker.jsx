import React from "react";

const PasswordStrengthIndicator = ({ password }) => {
  const getPasswordStrength = () => {
    const passswordLength = password.length;

    if (passswordLength < 1) {
      return "";
    } else if (passswordLength < 4) {
      return "Very Weak";
    } else if (passswordLength < 8) {
      return "Poor";
    } else if (passswordLength < 12) {
      return "Medium";
    } else if (passswordLength < 4) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const passwordStrength = getPasswordStrength();
  if (!passwordStrength) return <React.Fragment />;

  return (
    <div className="password-strength">
      <b>Strength :</b>{" "}
      <span style={{ fontWeight: "bold" }}>{passwordStrength}</span>
    </div>
  );
};

export default PasswordStrengthIndicator;
