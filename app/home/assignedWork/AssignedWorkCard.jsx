import toast from "react-hot-toast";
import CreatedWorkInfo from "../CreatedWorkInfo";
import { useDispatch } from "react-redux";
import getOverDueDate from "@/app/_utils/getOverDueDate";
import { updateWorkById } from "@/app/_lib/workSlice";

function AssignedWorkCard({ work }) {
  const { title, description, dueDate, priority, status, _id } = work;
  const dispatch = useDispatch();
  const statusText = status ? "completed" : "pending";
  const dateInfo = getOverDueDate(dueDate);

  async function handleUpdate() {
    try {
      const token = localStorage.getItem("token");

      // deleting data
      const res = await fetch(
        `https://satmurai.onrender.com/work/update/${_id}`,
        {
          method: "PUT",
          headers: {
            authorization: `JWT ${token}`,
          },
        }
      );

      // receiving data
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        console.log(data);
        toast.success(data.message);
        dispatch(updateWorkById(_id));
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
        {status || (
          <button
            onClick={handleUpdate}
            className="w-fit px-2.5 py-1 bg-green-400/40 rounded-md"
          >
            Done
          </button>
        )}
      </div>
    </div>
  );
}

export default AssignedWorkCard;
