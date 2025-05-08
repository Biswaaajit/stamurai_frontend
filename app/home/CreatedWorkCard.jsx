import { RiDeleteBin6Line } from "react-icons/ri";
import getOverDueDate from "../_utils/getOverDueDate";
import CreatedWorkInfo from "./CreatedWorkInfo";
import { useDispatch } from "react-redux";
import { deleteWorkById } from "../_lib/workSlice";
import toast from "react-hot-toast";

function CreatedWorkCard({ work }) {
  const { title, description, dueDate, priority, status, _id } = work;
  const dispatch = useDispatch();
  const statusText = status ? "completed" : "pending";
  const dateInfo = getOverDueDate(dueDate);

  async function handleDelete() {
    try {
      const token = localStorage.getItem("token");

      // deleting data
      const res = await fetch(
        `https://satmurai.onrender.com/work/delete/${_id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `JWT ${token}`,
          },
        }
      );

      //receiving data
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        console.log(data);
        toast.success(data.message);
        dispatch(deleteWorkById(_id));
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!!");
    }
  }
  return (
    <div
      className={` px-3 py-4 space-y-1.5 rounded-lg ${
        dateInfo ? "bg-red-400/20" : "bg-slate-300/20"
      }`}
    >
      <p className="text-lg font-semibold">{title}</p>
      <p className="italic">{description}</p>
      <div className="flex justify-between items-center">
        <CreatedWorkInfo
          priority={priority}
          statusText={statusText}
          dateInfo={dateInfo}
          status={status}
        />
        <button
          onClick={handleDelete}
          className="w-fit px-2.5 py-1 bg-red-400/40 rounded-md"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}

export default CreatedWorkCard;
