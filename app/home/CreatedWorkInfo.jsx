function CreatedWorkInfo({ priority, dateInfo, statusText, status }) {
  return (
    <div className="text-xs capitalize flex justify-end items-center gap-3">
      {priority && (
        <p className="bg-red-200 border-1 border-red-500 px-1.5 rounded-md">
          imp
        </p>
      )}
      {dateInfo || (
        <p
          className={`px-1.5 rounded-md border-1 ${
            status
              ? "border-green-500 bg-green-200"
              : "border-slate-500 bg-slate-100"
          }`}
        >
          {statusText}
        </p>
      )}
      {dateInfo && (
        <p className="px-1.5 rounded-md border-1 bg-red-600 text-slate-100 ">
          Overdue
        </p>
      )}
    </div>
  );
}

export default CreatedWorkInfo;
