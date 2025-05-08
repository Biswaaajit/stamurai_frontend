function CreatePriorityTask({ value, setFunc }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="">Select work priority</label>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-1">
          <input
            type="radio"
            value="true"
            checked={value === true}
            onChange={() => setFunc(true)}
          />
          Yes
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            value="false"
            checked={value === false}
            onChange={() => setFunc(false)}
          />
          No
        </label>
      </div>
    </div>
  );
}

export default CreatePriorityTask;
