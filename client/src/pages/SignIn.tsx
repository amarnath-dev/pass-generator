import React, { useState } from "react";
import GoogleAuth from "../components/GoogleAuth/GoogleAuth";
import { signInWithEmailPassword } from "../services/userServices";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Credential } from "../interfaces/user.interface";

const SignIn = () => {
  const [credential, setCredential] = useState<Credential>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredential((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (credential) {
      const res = await signInWithEmailPassword(credential);
      if (res.status === true) {
        Cookies.set("token", res.token);
        navigate("/");
      }
      if (res.status === false) {
        toast.error(res.message);
      }
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="w-screen h-screen text-one bg-background">
        <div className="w-full h-full flex justify-center items-center px-5">
          <div className="w-full md:w-1/2 h-96 bg-white rounded-lg">
            <div className="w-full h-full flex items-center justify-center flex-col px-2 md:px-20">
              <div className="w-full text-center">
                <h1 className="text-2xl py-4 font-bold text-black">Sign In</h1>
              </div>
              <input
                type="text"
                name="email"
                className="w-full py-3 rounded ps-4 text-black text-lg border border-teal-400"
                placeholder="Enter your email"
                value={credential.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                className="w-full py-3 my-3 rounded ps-4 text-black text-lg border border-teal-400"
                placeholder="Enter your password"
                value={credential.password}
                onChange={handleChange}
              />
              <div className="w-full text-center bg-teal-500 hover:bg-teal-600 rounded cursor-pointer">
                <button className="py-3 font-bold" onClick={handleSubmit}>
                  Sign In
                </button>
              </div>
              <div className="w-full py-3 flex justify-center">
                <GoogleAuth actionType={"signin"} />
              </div>
              <button
                className="text-blue-500 font-bold text-lg"
                onClick={() => navigate("/signup")}
              >
                <small className="text-black">New User ?</small> Sign up{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
