import { useState } from "react";
import FormContainer from "./FormContainer";
import InputTag from "./InputTag";
import FormMsg from "./FormMsg";
import FormBtn from "./FormBtn";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../_lib/userSlice";

function Login({ setLogin }) {
  const [loginEmail, setLoginEmail] = useState("biswa@gmail.com");
  const [loginPassword, setLoginPassword] = useState("123");
  const [logging, setLogging] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  // login handler
  async function handleLogin(e) {
    e.preventDefault();
    try {
      setLogging(true);
      const res = await fetch("https://satmurai.onrender.com/user/login", {
        method: "POST",
        body: JSON.stringify({
          userEmail: loginEmail,
          userPassword: loginPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        console.log(data);
        localStorage.setItem("token", data.token);
        dispatch(addUser(data.user));
        toast.success(data.message);
        setTimeout(() => {
          router.push("/home");
        }, 1500);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!!");
    } finally {
      setLogging(false);
    }
  }
  return (
    <FormContainer handleForm={handleLogin}>
      <InputTag
        type="email"
        placeholder="Email Id"
        value={loginEmail}
        setFunc={setLoginEmail}
      />
      <InputTag
        type="password"
        placeholder="Password"
        value={loginPassword}
        setFunc={setLoginPassword}
      />
      <FormMsg setLogin={setLogin} btnName="Sign up">
        <p>Donot have account yet?</p>
      </FormMsg>
      <FormBtn btnName="Login" value={logging} loadingMsg="Logging..." />
    </FormContainer>
  );
}

export default Login;
