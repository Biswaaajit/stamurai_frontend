function CreateTaskDescription({ value, setFunc }) {
  return (
    <div className="flex flex-col gap-2">
      <label>Work Description</label>
      <textarea
        value={value}
        required
        onChange={(e) => setFunc(e.target.value)}
        className="focus-within:outline-none border-2 w-full md:w-[80%] lg:w-[95%] xl:w-[80%] rounded-md h-[18vh]"
        placeholder="Work description"
      ></textarea>
    </div>
  );
}

export default CreateTaskDescription;
