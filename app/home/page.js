"use client";

import { useDispatch, useSelector } from "react-redux";
import Spinner from "../_Components/Spinner";
import ErrorPage from "../_Components/ErrorPage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { addWorkData } from "../_lib/workSlice";
import CreatedWork from "./CreatedWork";
import PageTitle from "../_Components/PageTitle";

function HomePage() {
  const { loginStatus } = useSelector((state) => state.user);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!loginStatus) return router.push("/");
    const token = localStorage.getItem("token");

    async function fetchAllWorkData() {
      try {
        const res = await fetch(
          "https://satmurai.onrender.com/work/allWorkData",
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
        dispatch(addWorkData(data.works));
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAllWorkData();
  }, [router, loginStatus, dispatch]);

  if (loading) return <Spinner />;
  if (error) return <ErrorPage error={error} />;

  return (
    <div className="w-full min-h-full py-4">
      <PageTitle text="Work assigned by me" />
      <CreatedWork />
    </div>
  );
}

export default HomePage;
