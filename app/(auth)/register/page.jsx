"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });
    router.replace("/users");
  };

  return (
    <div className="container mx-auto p-2 my-4  border-2 border-slate-50">
      <h1 className="text-2xl font-bold">Register</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className=" w-100 flex gap-8">
          <span>Username</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className=" w-100 flex gap-8">
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-64 ">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
