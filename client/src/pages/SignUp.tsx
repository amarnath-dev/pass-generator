import { useState } from "react";
import GoogleAuth from "../components/GoogleAuth/GoogleAuth";
import { signUp } from "../services/userServices";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export interface Credential {
  email: string;
  password: string;
}

const SignUp = () => {
  const naigate = useNavigate();

  const [credential, setCredential] = useState<Credential>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredential((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (credential) {
      const res = await signUp(credential);
      if (res) {
        console.log("Resss", res);
        Cookies.set("token", res.token);
        naigate("/");
      }
    }
  };

  return (
    <div className="w-screen h-screen text-one bg-background">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-1/2 h-96 bg-gray-500 rounded-lg">
          <div className="w-full h-full flex items-center justify-center flex-col px-20">
            <div className="w-full text-center">
              <h1 className="text-xl py-4 font-bold">Sign Up</h1>
            </div>
            <input
              type="text"
              name="email"
              className="w-full py-3 rounded ps-4 text-black text-lg"
              placeholder="Enter your email"
              value={credential.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              className="w-full py-3 my-3 rounded ps-4 text-black text-lg"
              placeholder="Enter your password"
              value={credential.password}
              onChange={handleChange}
            />
            <div className="w-full text-center bg-teal-500 hover:bg-teal-600 rounded cursor-pointer">
              <button className="py-3 font-bold" onClick={handleSubmit}>
                Sign Up
              </button>
            </div>
            <div className="w-full py-3 flex justify-center">
              <GoogleAuth />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
