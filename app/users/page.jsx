import { notFound } from "next/navigation";
import React from "react";

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div>
      {new Date().toLocaleTimeString()}
      {data.map((user) => (
        <p key={user}>{user.name}</p>
      ))}
    </div>
  );
};

export default page;
