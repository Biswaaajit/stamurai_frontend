function FormBtn({ btnName, value, loadingMsg }) {
  return (
    <button
      type="submit"
      disable={`${value}`}
      className="bg-sky-700 text-slate-100 py-1.5 font-semibold w-fit px-8 rounded-md self-center"
    >
      {value ? loadingMsg : btnName}
    </button>
  );
}

export default FormBtn;
