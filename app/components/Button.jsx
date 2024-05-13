"use client";

import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={(e) => setCount((prev) => prev + 1)}>
        Button({count})
      </button>
    </div>
  );
};

export default Button;
