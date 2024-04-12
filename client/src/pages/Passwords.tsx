import { useEffect, useState } from "react";
import API from "../../api";
import { MdDelete } from "react-icons/md";
import ShowPassword from "../components/ShowPassword/ShowPassword";
import { deletePass } from "../services/userServices";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

interface Passwords {
  _id: string;
  password: string;
  userID: string;
  description: string;
  createdAt: string;
}

const Passwords = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [passwords, setPassword] = useState<Passwords[]>([]);

  const [viewObj, setViewObj] = useState<Passwords>();

  useEffect(() => {
    (async () => {
      try {
        const response = await API.get("/passwords");
        if (response.data?.passwords) {
          console.log(response);
          const values = response.data.passwords;
          setPassword(values);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure you want to delete this?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deletePass(id);
        if (res) {
          const newPasswords = passwords.filter(
            (passObj) => passObj._id !== id
          );
          setPassword(newPasswords);
          toast.success("Password Deleted Successfully");
        }
      } else if (result.isDenied) {
        return;
      }
    });
  };

  const handleView = (obj: Passwords) => {
    setOpenModal(true);
    setViewObj(obj);
  };

  return (
    <>
      <ShowPassword
        open={openModal}
        setOpenModal={setOpenModal}
        currentObj={viewObj ? viewObj : null}
      />
      <div className="w-full h-screen bg-background flex justify-center text-one">
        <div className="w-2/3 px-3 py-5">
          <div className="w-full h-full rounded-md">
            <div>
              <h1 className="text-center text-3xl font-bold py-5">
                Your Passwords 🪄
              </h1>
            </div>

            {passwords.map((obj: Passwords, index: number) => {
              return (
                <>
                  <div
                    key={index}
                    className="w-full px-3 flex border-2 rounded-md"
                  >
                    <div className="flex-1 text-wrap rounded flex items-center">
                      <h1 className="px-2 font-bold">{obj.description}</h1>
                    </div>
                    <div className="flex-2 flex items-center rounded px-2">
                      <button
                        className="px-2 py-2 rounded-md underline"
                        onClick={() => handleView(obj)}
                      >
                        View
                      </button>
                    </div>
                    <div className="flex-2 flex items-center rounded px-2">
                      <MdDelete
                        className="text-4xl cursor-pointer"
                        onClick={() => handleDelete(obj._id)}
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Passwords;
