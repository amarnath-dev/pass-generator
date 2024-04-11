import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/userServices";

export const GoogleAuth = () => {
  const navigate = useNavigate();
  const handleSuccess = (data: CredentialResponse) => {
    if (data.credential) {
      console.log(data.credential);
      const response = signIn(data.credential);
      console.log(response);
      navigate("/");
    }
  };
  const handleError = () => {
    console.log("Error");
  };
  return (
    <>
      <div className="w-screen h-screen bg-background flex justify-center items-center">
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      </div>
    </>
  );
};

export default GoogleAuth;
