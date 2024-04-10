import GoogleAuth from "../components/GoogleAuth/GoogleAuth";

const SignIn = () => {
  return (
    <>
      <div className="w-screen h-screen text-one bg-background">
        <GoogleAuth />
      </div>
    </>
  );
};

export default SignIn;
