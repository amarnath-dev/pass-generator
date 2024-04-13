import { Modal } from "flowbite-react";
import React, { ChangeEvent, SetStateAction, useState } from "react";
import { IoClose } from "react-icons/io5";
import { generateOwnPass } from "../../services/userServices";
import { ResultModal } from "../ResultModal/ResultModal";

interface InputModalProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export interface Requirements {
  uppercase: string;
  lowercase: string;
  numbers: string;
  specialCharacters: string;
}

const InputModal: React.FC<InputModalProps> = ({ open, setOpen }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [requirements, setRequirements] = useState<Requirements>({
    uppercase: "",
    lowercase: "",
    numbers: "",
    specialCharacters: "",
  });
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setRequirements((prevRequirements) => ({
      ...prevRequirements,
      [name]: value,
    }));
  };

  const handleClick = () => {
    (async () => {
      if (requirements) {
        const result = await generateOwnPass(requirements);
        if (result) {
          setOpen(false);
          setPassword(result);
          setModalOpen(true);
        }
      } else {
        console.log("Please fill out the form");
      }
    })();
  };

  return (
    <>
      <ResultModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        password={password}
      />
      <div className="w-full h-full">
        <Modal show={open} className="h-full bg-background">
          <div className="w-full flex justify-end px-3 py-3">
            <IoClose
              onClick={() => setOpen(false)}
              className="text-4xl text-teal-600 hover:bg-gray-600 rounded-full"
            />
          </div>
          <Modal.Body>
            <div className="flex justify-center">
              <div className="w-1/2 flex flex-col px-2 py-1 text-one">
                <label htmlFor="" className="flex flex-col mt-2">
                  Enter the Uppercase letter count
                  <input
                    type="number"
                    name="uppercase"
                    className="border-2 py-2 text-black ps-5 rounded-md mt-1"
                    value={requirements.uppercase}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="" className="flex flex-col mt-2">
                  Enter the Lowercase letter count
                  <input
                    type="number"
                    name="lowercase"
                    className="border-2 py-2 text-black ps-5 rounded-md mt-1"
                    value={requirements.lowercase}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="" className="flex flex-col mt-2">
                  Enter the numbers count
                  <input
                    type="number"
                    name="numbers"
                    className="border-2 py-2 text-black ps-5 rounded-md mt-1"
                    value={requirements.numbers}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="" className="flex flex-col mt-2">
                  Enter the special characters count
                  <input
                    type="number"
                    name="specialCharacters"
                    className="border-2 py-2 text-black ps-5 rounded-md mt-1"
                    value={requirements.specialCharacters}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="w-full text-center py-5">
              <button
                className="bg-teal-700 hover:bg-teal-800 rounded-md text-one px-4 py-2"
                onClick={handleClick}
              >
                Get Password 🗝️
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default InputModal;
