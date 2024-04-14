import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/userServices";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GoogleAuth = () => {
  const navigate = useNavigate();

  const handleSuccess = async (data: CredentialResponse) => {
    if (data.credential) {
      const response = await signIn(data.credential);
      if (response.status === true) {
        Cookies.set("token", response.token);
        navigate("/");
      } else {
        toast.error(response.message);
      }
    }
  };
  const handleError = () => {
    toast.error("Something went wrong!");
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
      <div>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          width={500}
        />
      </div>
    </>
  );
};

export default GoogleAuth;
