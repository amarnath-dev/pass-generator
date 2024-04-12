import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { SetStateAction } from "react";
import { FaCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CurrentPass {
  password: string;
}

interface ShowPasswordProps {
  open: boolean;
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
  currentObj: CurrentPass | null;
}

const ShowPassword: React.FC<ShowPasswordProps> = ({
  open,
  setOpenModal,
  currentObj,
}) => {
  const closeModal = () => {
    setOpenModal(false);
  };
  const handleCopy = () => {
    toast("🪄 Password Copied");
  };
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
        <Modal open={open} onClose={closeModal}>
          <div className="px-8">
            <div className="w-full min-w-60 bg-teal-500 text-wrap rounded ps-2">
              <h1 className="font-bold text-center text-xl px-6 py-3">
                {currentObj?.password}
              </h1>
            </div>
            <div className="flex justify-around px-2 py-6">
              <CopyToClipboard text={"Helloo"} onCopy={handleCopy}>
                <button className="px-2 py-1 border rounded bg-teal-400 hover:bg-teal-500">
                  <FaCopy className="text-gray-800 text-3xl" />
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ShowPassword;
