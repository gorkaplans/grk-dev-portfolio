import React from "react";

import "./Button.scss";

const Button = () => {
  return (
    <label for="toggleB" className="flex items-center cursor-pointer mr-6">
      <div className="relative">
        <input type="checkbox" id="toggleB" className="sr-only" />
        <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
        <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
      </div>
    </label>
  );
};

export default Button;
