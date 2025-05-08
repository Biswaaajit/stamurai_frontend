"use client";

import ErrorPage from "@/app/_Components/ErrorPage";
import Spinner from "@/app/_Components/Spinner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";
import PageTitle from "@/app/_Components/PageTitle";

export default function CreateTaskPage() {
  const { userId } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); // track error state
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!userId) return router.push("/");
    const token = localStorage.getItem("token");

    async function fetchTasks() {
      try {
        const res = await fetch(
          `https://satmurai.onrender.com/user/${userId}`,
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
        }
        setUsers(data.users);
        console.log(data.users);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, [userId, router]);

  if (loading) return <Spinner />;
  if (error) return <ErrorPage error={error} />;

  return (
    <div className="w-full min-h-fit  flex flex-col py-4 px-2 gap-8">
      <PageTitle text="Assign task to the employee" />
      {users.length !== 0 && (
        <div className="grow grid grid-cols-2 place-items-center">
          {users.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </div>
      )}
      {users.length === 0 && (
        <div className="w-full h-[60vh]  flex justify-center items-center text-xl text-slate-300">
          <p>No data available</p>
        </div>
      )}
    </div>
  );
}
