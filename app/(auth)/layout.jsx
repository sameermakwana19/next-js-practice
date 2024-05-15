"use client";
import Link from "next/link";
import React, { useState } from "react";

const layout = ({ children }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      layout1
      <div>
        <input
          style={{ color: "red" }}
          placeholder="layout state"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <Link href={"register"}> click here register</Link>
      <Link href={"login"}> click here login</Link>
      <div>{children}</div>
    </div>
  );
};

export default layout;
