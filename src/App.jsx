import { useState } from "react";
import "./App.css";
import usePasswordGenerator from "./hook/usePasswordGenerator";
import PasswordStrengthIndicator from "./component/strengthChecker";
import Button from "./component/button";
import Checkbox from "./component/Checkbox";
import "bootstrap-icons/font/bootstrap-icons.css";
import Heading from "./component/Heading";

function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxeData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    checkboxData[i].state = !checkboxData[i].state;
    setCheckboxeData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  return (
    <>
      <Heading />
      <div className="container">
        {/*  password Text and copy */}
        {password && (
          <div className="header">
            <div className="title">{password}</div>
            <Button
              text={
                copied ? (
                  <i className="bi bi-check-lg lg"></i>
                ) : (
                  <i className="bi bi-clipboard lg"></i>
                )
              }
              customClass="copyBtn"
              onClick={handleCopy}
            />
          </div>
        )}
        {/*  character length */}
        <div className="charLength">
          <span>
            <label>Character length</label>
            <label>{length}</label>
          </span>

          <input
            id="myinput"
            type="range"
            min="4"
            max="20"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        {/* checkboxes */}
        <div className="checkboxes">
          {checkboxData.map((checkbox, index) => {
            return (
              <Checkbox
                key={index}
                title={checkbox.title}
                onChange={() => handleCheckboxChange(index)}
                state={checkbox.state}
              />
            );
          })}
        </div>
        {/* strength */}
        <PasswordStrengthIndicator password={password} />

        {/* Error Handling */}
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}

        {/* Generate Button */}
        <Button
          text="Generate password"
          customClass="generateBtn"
          onClick={() => generatePassword(checkboxData, length)}
        />
      </div>
    </>
  );
}

export default App;
