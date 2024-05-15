"use client";
import React, { useState } from "react";

const AuthTemplate = ({ children }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      AuthTemplate
      <div>
        <input
          placeholder="template text"
          style={{ color: "red" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AuthTemplate;
