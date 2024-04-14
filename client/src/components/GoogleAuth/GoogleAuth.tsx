import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/userServices";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export const GoogleAuth = () => {
  const navigate = useNavigate();

  const handleSuccess = async (data: CredentialResponse) => {
    if (data.credential) {
      const response = await signIn(data.credential);
      Cookies.set("token", response);
      navigate("/");
    }
  };
  const handleError = () => {
    toast.error("Something wen wrong!");
  };
  return (
    <>
      <div>
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} width={500} />
      </div>
    </>
  );
};

export default GoogleAuth;
