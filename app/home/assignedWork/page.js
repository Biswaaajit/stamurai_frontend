"use client";
import CreatedWorkFilter from "../CreatedWorkFilter";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import PageTitle from "@/app/_Components/PageTitle";
import AssignedWorkCard from "./AssignedWorkCard";
import getOverDueDate from "@/app/_utils/getOverDueDate";

function AssignedWorkPage() {
  const workInfo = useSelector((store) => store.work.workData);
  const { userId } = useSelector((store) => store.user);
  const [works, setWorks] = useState([]);
  const [workInput, setWorkInput] = useState("");
  const [workCompleted, setWorkCompleted] = useState(false);
  const [workImportant, setWorkImportant] = useState(false);
  const [workOverdue, setWorkOverdue] = useState(false);

  const workArr = useMemo(() => {
    return workInfo.filter((work) => work.assignedTo === userId);
  }, [workInfo, userId]);

  useEffect(() => {
    let filtered = workArr;

    if (workInput) {
      filtered = filtered.filter((work) =>
        work.title.toLowerCase().includes(workInput.toLowerCase())
      );
    }

    if (workCompleted) {
      filtered = filtered.filter((work) => work.status === true);
    }

    if (workImportant) {
      filtered = filtered.filter((work) => work.priority === true);
    }

    if (workOverdue) {
      filtered = filtered.filter((work) => getOverDueDate(work.dueDate));
    }

    setWorks(filtered);
  }, [workInput, workCompleted, workImportant, workOverdue, workArr]);

  return (
    <div className="w-full space-y-4">
      <PageTitle text="Work assigned to me" />
      <CreatedWorkFilter
        workInput={workInput}
        setWorkInput={setWorkInput}
        workCompleted={workCompleted}
        setWorkCompleted={setWorkCompleted}
        workImportant={workImportant}
        setWorkImportant={setWorkImportant}
        workOverdue={workOverdue}
        setWorkOverdue={setWorkOverdue}
      />
      {works.length !== 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {works.map((work) => (
            <AssignedWorkCard key={work._id} work={work} />
          ))}
        </div>
      )}
      {works.length === 0 && (
        <div className="w-full h-[60vh]  flex justify-center items-center text-xl text-slate-300">
          <p>No data available</p>
        </div>
      )}
    </div>
  );
}

export default AssignedWorkPage;
