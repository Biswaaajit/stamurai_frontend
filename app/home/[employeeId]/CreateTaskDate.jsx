function CreateTaskDate({ name, value, setFunc }) {
  const today = new Date().toISOString().split("T")[0];
  return (
    <div className="flex flex-col gap-2">
      <label>{name}</label>
      <input
        className="border-2 px-2 py-1 rounded-md focus-within:outline-none w-full md:w-[80%] lg:w-[95%] xl:w-[80%]"
        type="date"
        value={value}
        min={today}
        required
        onChange={(e) => setFunc(e.target.value)}
      />
    </div>
  );
}

export default CreateTaskDate;
