import { useState } from "react";
import InputModal from "../components/InputModal/InputModal";
import { useNavigate } from "react-router-dom";
import { generateOwnPass } from "../services/userServices";
import { ResultModal } from "../components/ResultModal/ResultModal";

interface Requirements {
  uppercase: string;
  lowercase: string;
  numbers: string;
  specialCharacters: string;
}

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const handlePreset = async (requirements: Requirements) => {
    try {
      const result = await generateOwnPass(requirements);
      if (result) {
        setPassword(result);
        setModalOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ResultModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        password={password}
      />
      <InputModal open={open} setOpen={setOpen} />
      <div className="w-screen h-full md:h-screen bg-background text-one">
        <div className="py-10 w-full flex justify-center flex-col px-10">
          <h1 className="text-5xl text-center font-semibold">
            Password made simple
          </h1>
          <h1 className="text-center py-8 text-xl">
            Generate your own unique passwords ❤️
          </h1>
          <hr />
        </div>
        <div className="w-full flex justify-between flex-col md:flex-row md:px-10">
          <div className="w-full flex flex-col items-center md:w-96">
            <div className="font-semibold text-lg">
              <li>3 Uppercase Letter</li>
              <li>2 Lowercase Letter</li>
              <li>2 Number</li>
              <li>1 special character</li>
              <li>8 characters long</li>
            </div>
            <div className="py-4">
              <button
                className="bg-teal-700 py-1 px-3 rounded-md font-bold hover:bg-teal-600"
                onClick={() =>
                  handlePreset({
                    uppercase: "3",
                    lowercase: "2",
                    numbers: "2",
                    specialCharacters: "1",
                  })
                }
              >
                Get this Password 🗝️
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col items-center md:w-96">
            <div className="font-semibold text-lg">
              <li>5 Uppercase Letters</li>
              <li>3 Lowercase Letters</li>
              <li>3 Numbers</li>
              <li>2 special character</li>
              <li>13 characters long</li>
            </div>
            <div className="py-4">
              <button
                className="bg-teal-700 py-1 px-3 rounded-md font-bold hover:bg-teal-600"
                onClick={() =>
                  handlePreset({
                    uppercase: "5",
                    lowercase: "3",
                    numbers: "3",
                    specialCharacters: "2",
                  })
                }
              >
                Get this Password 🗝️
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col items-center md:w-96">
            <div className="font-semibold text-lg">
              <li>5 Uppercase Letters</li>
              <li>4 Lowercase Letters</li>
              <li>4 Numbers</li>
              <li>5 special character</li>
              <li>18 characters long</li>
            </div>
            <div className="py-4">
              <button
                className="bg-teal-700 py-1 px-3 rounded-md font-bold hover:bg-teal-600"
                onClick={() =>
                  handlePreset({
                    uppercase: "5",
                    lowercase: "4",
                    numbers: "4",
                    specialCharacters: "5",
                  })
                }
              >
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
            className="bg-teal-700 px-3 py-2 rounded-md font-bold mt-4 md:mt-0 hover:bg-teal-600 ml-3"
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
