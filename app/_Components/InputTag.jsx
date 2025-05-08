function InputTag({ type, placeholder, value, setFunc }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      required
      onChange={(e) => setFunc(e.target.value)}
      className="border-b-2 border-slate-400 hover:border-slate-800 py-1 px-1.5 bg-transparent focus-within:outline-none transition-all"
    />
  );
}

export default InputTag;
