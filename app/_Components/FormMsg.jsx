function FormMsg({ setLogin, children, btnName }) {
  return (
    <div className="flex justify-center items-center gap-1.5 ">
      {children}
      <button
        className="text-sky-700 font-semibold"
        onClick={() => setLogin((curr) => !curr)}
        type="button"
      >
        {btnName}
      </button>
    </div>
  );
}

export default FormMsg;
