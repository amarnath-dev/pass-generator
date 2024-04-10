import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export const GoogleAuth = () => {
  const navigate = useNavigate();
  const handleSuccess = (response: CredentialResponse) => {
    if (response.credential) {
      console.log(response.credential);
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
