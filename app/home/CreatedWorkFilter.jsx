function CreatedWorkFilter({
  workInput,
  setWorkInput,
  workCompleted,
  setWorkCompleted,
  workImportant,
  setWorkImportant,
  workOverdue,
  setWorkOverdue,
}) {
  const btn = "px-2 py-1 md:px-3 border rounded text-xs md:text-sm";
  return (
    <div className="py-4 space-y-6 px-4 w-full flex flex-col justify-center">
      <input
        value={workInput}
        onChange={(e) => setWorkInput(e.target.value)}
        type="text"
        className="border-2 px-2 py-1 rounded w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto focus-within:outline-none"
        placeholder="Search work..."
      />
      <div className="self-start flex gap-2">
        <button
          onClick={() => setWorkOverdue((prev) => !prev)}
          className={`${btn} ${
            workOverdue ? "bg-black text-white" : "bg-slate-200 text-black"
          }`}
        >
          Overdue
        </button>
        <button
          onClick={() => setWorkImportant((prev) => !prev)}
          className={`${btn} ${
            workImportant ? "bg-black text-white" : "bg-slate-200 text-black"
          }`}
        >
          Important
        </button>
        <button
          onClick={() => setWorkCompleted((prev) => !prev)}
          className={`${btn} ${
            workCompleted ? "bg-black text-white" : "bg-slate-200 text-black"
          }`}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default CreatedWorkFilter;
