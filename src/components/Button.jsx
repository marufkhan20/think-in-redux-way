import React from "react";

const Button = ({ children, handler, bg }) => {
  return (
    <button
      className={`${bg} text-white px-3 py-2 rounded shadow`}
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default Button;
