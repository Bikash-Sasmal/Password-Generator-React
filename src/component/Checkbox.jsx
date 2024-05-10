import React from "react";

const Checkbox = ({ title, state, onChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        onChange={onChange}
        checked={state}
      />
      <label>{title}</label>
    </div>
  );
};

export default Checkbox;
