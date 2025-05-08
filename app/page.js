"use client";

import { useState } from "react";
import Login from "./_Components/Login";
import SignUp from "./_Components/SignUp";

export default function Form() {
  const [login, setLogin] = useState(true);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {login ? <Login setLogin={setLogin} /> : <SignUp setLogin={setLogin} />}
    </div>
  );
}
