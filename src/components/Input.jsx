import React from "react";

function Input({ label, textarea, ...props }) {
  return (
    <p>
      <label htmlFor="">{label}</label>
      {textarea ? <textarea /> : <input />}
    </p>
  );
}

export default Input;
