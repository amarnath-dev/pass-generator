import { useState } from "react";
import InputModal from "../components/InputModal/InputModal";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <InputModal open={open} setOpen={setOpen} />
      <div className="w-screen h-screen bg-background text-one">
        <div className="py-10 w-full flex justify-center flex-col">
          <h1 className="text-5xl text-center font-semibold">
            Password made simple
          </h1>
          <h1 className="text-center py-8 text-xl">
            Generate your own unique passwords ❤️
          </h1>
          <hr />
        </div>
        <div className="w-full flex justify-between px-10">
          <div className="w-96">
            <div className="font-semibold text-lg">
              <li>3 Uppercase Letter</li>
              <li>2 Lowercase Letter</li>
              <li>2 Number</li>
              <li>1 special character</li>
              <li>8 characters long</li>
            </div>
            <div className="py-4">
              <button className="bg-teal-700 py-1 px-3 rounded-md font-bold hover:bg-teal-600">
                Get this Password 🗝️
              </button>
            </div>
          </div>
          <div className="w-96">
            <div className="font-semibold text-lg">
              <li>5 Uppercase Letters</li>
              <li>3 Lowercase Letters</li>
              <li>3 Numbers</li>
              <li>2 special character</li>
              <li>13 characters long</li>
            </div>
            <div className="py-4">
              <button className="bg-teal-700 py-1 px-3 rounded-md font-bold hover:bg-teal-600">
                Get this Password 🗝️
              </button>
            </div>
          </div>
          <div className="w-96">
            <div className="font-semibold text-lg">
              <li>5 Uppercase Letters</li>
              <li>4 Lowercase Letters</li>
              <li>4 Numbers</li>
              <li>5 special character</li>
              <li>18 characters long</li>
            </div>
            <div className="py-4">
              <button className="bg-teal-700 py-1 px-3 rounded-md font-bold hover:bg-teal-600">
                Get this Password 🗝️
              </button>
            </div>
          </div>
        </div>
        <div className="w-full text-center py-14">
          <button
            className="bg-teal-700 px-3 py-2 rounded-md font-bold hover:bg-teal-600"
            onClick={() => setOpen(true)}
          >
            Create Own Password 🚀
          </button>
          <button
            className="bg-teal-700 px-3 py-2 rounded-md font-bold  hover:bg-teal-600 ml-3"
            onClick={() => navigate("/passwords")}
          >
            My Passwords 🗝️
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
