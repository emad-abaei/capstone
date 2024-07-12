import React from "react";

function Button({ children, type }) {
  return (
    <button className={`${type === "delivery" ? "delivery" : ""}`}>
      {children}
    </button>
  );
}

export default Button;
