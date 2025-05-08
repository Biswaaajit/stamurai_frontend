function CreateTaskInput({ name, value, setFunc, disable = false, type }) {
  const style =
    "border-2 px-2 py-1 rounded-md focus-within:outline-none w-full md:w-[80%] lg:w-[95%] xl:w-[80%]";
  return (
    <div className="flex flex-col gap-2">
      <label>{name}</label>
      {disable ? (
        <input
          type={type}
          className={`${style} ${disable && "bg-slate-300/50 border-none"}`}
          value={value}
          disabled
        />
      ) : (
        <input
          className={`${style}`}
          type={type}
          value={value}
          required
          onChange={(e) => setFunc(e.target.value)}
        />
      )}
    </div>
  );
}

export default CreateTaskInput;
