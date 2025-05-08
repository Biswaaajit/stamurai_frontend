import { useState } from "react";
import FormBtn from "./FormBtn";
import FormContainer from "./FormContainer";
import FormMsg from "./FormMsg";
import InputTag from "./InputTag";
import toast from "react-hot-toast";

export default function SignUp({ setLogin }) {
  const [signUser, setSignUser] = useState("");
  const [signEmail, setSignEmail] = useState("");
  const [signPassword, setSignPassword] = useState("");
  const [signing, setSigning] = useState(false);

  // Sign up handler
  async function handleSignUp(e) {
    e.preventDefault();

    try {
      setSigning(true);
      const res = await fetch("https://satmurai.onrender.com/user/register", {
        method: "POST",
        body: JSON.stringify({
          userName: signUser,
          userPassword: signPassword,
          userEmail: signEmail,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
        setTimeout(() => {
          setLogin(true);
        }, 1500);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!!");
    } finally {
      setSigning(false);
    }
  }
  return (
    <FormContainer handleForm={handleSignUp}>
      <InputTag
        type="text"
        placeholder="Username"
        value={signUser}
        setFunc={setSignUser}
      />
      <InputTag
        type="email"
        placeholder="Email Id"
        setFunc={setSignEmail}
        value={signEmail}
      />
      <InputTag
        type="password"
        placeholder="Password"
        value={signPassword}
        setFunc={setSignPassword}
      />

      <FormMsg setLogin={setLogin} btnName="Log in">
        <p>Already have an account!</p>
      </FormMsg>
      <FormBtn btnName="Sign Up" value={signing} loadingMsg="Signing In..." />
    </FormContainer>
  );
}
