import { RingLoader } from "react-spinners";
const Spinner = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-background">
        <RingLoader color="#36d7b7" />
      </div>
    </>
  );
};

export default Spinner;
