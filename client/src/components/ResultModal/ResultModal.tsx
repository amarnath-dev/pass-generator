import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import React, { SetStateAction } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ResultModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<SetStateAction<boolean>>;
  password: string;
}

export const ResultModal: React.FC<ResultModalProps> = ({
  modalOpen,
  setModalOpen,
  password,
}) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCopy = () => {
    toast("🪄 Password Copied");
  };

  const handleSave = () => {
    
  }

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
        <Modal open={modalOpen} onClose={closeModal}>
          <div>
            <h2 className="text-xl font-semibold px-10 py-8">
              Please copy and save your password 🗝️
            </h2>
            <h2 className="text-2xl text-center font-bold">
              {password ? password : "Your Password"}
            </h2>
            <div className="flex justify-around px-2 py-6">
              <CopyToClipboard text={password} onCopy={handleCopy}>
                <button className="px-2 py-1 border rounded bg-teal-400 hover:bg-teal-500">
                  <FaCopy className="text-gray-800" />
                </button>
              </CopyToClipboard>
              <button
                className="px-2 py-1 rounded border bg-teal-400 hover:bg-teal-500"
                onClick={handleSave}
              >
                Save Password
              </button>
              <button
                className="border px-2 py-1 rounded bg-teal-400 hover:bg-teal-500"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};
