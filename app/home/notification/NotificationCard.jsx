import { useState } from "react";
import toast from "react-hot-toast";

function NotificationCard({ cardInfo, notification, setNotification }) {
  const { message, read, _id } = cardInfo;

  async function handleClick() {
    try {
      const token = localStorage.getItem("token");

      // deleting data
      const res = await fetch(
        `https://satmurai.onrender.com/notification/update/${_id}`,
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
        const newData = notification.map((notify) =>
          notify._id === _id ? { ...notify, read: true } : notify
        );
        setNotification(newData);
        toast.success(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!!");
    }
  }
  return (
    <div
      className={`flex flex-col gap-2 py-2 px-3 rounded-md ${
        read ? "bg-slate-200" : "bg-green-300/70"
      }`}
    >
      <p>{message}</p>
      {read || (
        <button
          onClick={handleClick}
          className="self-end text-sm bg-slate-300 py-0.5 px-2 rounded-md "
        >
          Mark as read
        </button>
      )}
    </div>
  );
}

export default NotificationCard;
