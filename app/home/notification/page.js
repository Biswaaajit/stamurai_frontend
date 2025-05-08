"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ErrorPage from "@/app/_Components/ErrorPage";
import Spinner from "@/app/_Components/Spinner";
import PageTitle from "@/app/_Components/PageTitle";
import NotificationCard from "./NotificationCard";

function NotificationPage() {
  const { userId, loginStatus } = useSelector((state) => state.user);
  const [notification, setNotification] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!loginStatus) return router.push("/");
    const token = localStorage.getItem("token");

    async function fetchAllNotification() {
      try {
        const res = await fetch(
          `https://satmurai.onrender.com/notification/${userId}`,
          {
            method: "GET",
            headers: {
              authorization: `JWT ${token}`,
            },
          }
        );
        const data = await res.json();
        if (!res.ok) {
          console.log({ errorData: data });
          setError(data.message);
        }
        console.log(data.notifications);
        setNotification(data.notifications);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAllNotification();
  }, [router, loginStatus, userId]);

  if (loading) return <Spinner />;
  if (error) return <ErrorPage error={error} />;

  return (
    <div className="w-full min-h-full py-4">
      <PageTitle text="User notification" />
      {notification.length !== 0 && (
        <div className="px-2 rounded-lg">
          {notification.map((cardInfo) => (
            <NotificationCard
              key={cardInfo._id}
              cardInfo={cardInfo}
              notification={notification}
              setNotification={setNotification}
            />
          ))}
        </div>
      )}
      {notification.length === 0 && (
        <div className="w-full h-[60vh]  flex justify-center items-center text-xl text-slate-300">
          <p>No notification available</p>
        </div>
      )}
    </div>
  );
}

export default NotificationPage;
