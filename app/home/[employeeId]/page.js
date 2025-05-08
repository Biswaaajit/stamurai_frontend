"use client";

import { useSelector } from "react-redux";
import CreateTaskInput from "./CreateTaskInput";
import FormContainer from "./FormContainer";
import { use, useState } from "react";
import CreateTaskDate from "./CreateTaskDate";
import CreateTaskDescription from "./CreateTaskDescription";
import CreatePriorityTask from "./CreatePriorityTask";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function FormPage({ params }) {
  const { employeeId } = use(params);
  const { userId } = useSelector((store) => store.user);
  const [formTitle, setFormTitle] = useState("");
  const [formDate, setFormDate] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [workPriority, setWorkPriority] = useState(false);
  const [creating, setCreating] = useState(false);
  const router = useRouter();

  async function handleCreateTask(e) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      setCreating(true);

      // sending data
      const res = await fetch("https://satmurai.onrender.com/work/create", {
        method: "POST",
        body: JSON.stringify({
          title: formTitle,
          description: formDescription,
          dueDate: formDate,
          priority: workPriority,
          createdBy: userId,
          assignedTo: employeeId,
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: `JWT ${token}`,
        },
      });

      //receiving data
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        console.log(data);
        toast.success(data.message);
        setTimeout(() => {
          router.push("/home/createTask");
        }, 1500);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!!");
    } finally {
      setCreating(false);
    }
  }

  return (
    <div className="w-full h-full  gap-8 md:gap-12 flex flex-col justify-center items-center py-8">
      <p className="text-center font-bold text-2xl md:text-3xl">
        Create Task Form
      </p>
      <FormContainer handlerFunc={handleCreateTask}>
        <CreateTaskInput
          type="text"
          name="Assigned employee Id"
          value={employeeId}
          disable={true}
        />
        <CreateTaskInput
          type="text"
          name="Created employee Id"
          value={userId}
          disable={true}
        />
        <CreateTaskInput
          type="text"
          name="Work Title"
          value={formTitle}
          setFunc={setFormTitle}
        />
        <CreateTaskDate
          name="Select submission date"
          value={formDate}
          setFunc={setFormDate}
        />
        <CreateTaskDescription
          value={formDescription}
          setFunc={setFormDescription}
        />
        <CreatePriorityTask value={workPriority} setFunc={setWorkPriority} />
        <button
          type="submit"
          disable={`${creating}`}
          className="bg-slate-400/50 hover:bg-black hover:text-slate-100 font-semibold col-span-1 md:col-span-2  h-fit px-6 py-2 mx-auto rounded-lg transition-all"
        >
          {creating ? "Creating..." : "Create task"}
        </button>
      </FormContainer>
    </div>
  );
}
