import React, { ChangeEvent, SetStateAction, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { savePassword } from "../../services/userServices";
import { toast } from "react-toastify";

interface SaveModalProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  password: string;
}

function isEmpty(str: string) {
  if (str.trim().length === 0) {
    return true;
  } else {
    false;
  }
}

const SaveModal: React.FC<SaveModalProps> = ({ open, setOpen, password }) => {
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const closeModal = () => {
    setOpen(false);
  };

  const handleClick = async () => {
    if (!description || isEmpty(description)) {
      setError(true);
      return;
    }
    const response = await savePassword(password, description);
    if (response) {
      closeModal();
      toast.success("Password Saved Successfully");
    }
  };

  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
    setError(false);
  };

  return (
    <div>
      <Modal open={open} onClose={closeModal}>
        <div className="px-8">
          <div>
            <h1 className="text-center text-xl font-bold border-2 py-6 text-teal-700">
              {password}
            </h1>
            <div className="py-3">
              <h1 className="font-semibold">
                Enter a name for Identifying the password
              </h1>
              <input
                type="text"
                className="w-full border border-teal-500 rounded-md py-2 ps-3 mt-3"
                required
                value={description}
                onChange={handleDescription}
              />
              {error && (
                <>
                  <h1 className="text-red-500">Please provide a name</h1>
                </>
              )}
            </div>
          </div>
          <div className="flex justify-around px-2 py-6">
            <button
              className="border-2 px-2 py-2 rounded-md bg-teal-500 hover:bg-teal-600"
              onClick={handleClick}
            >
              Save Password
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SaveModal;
