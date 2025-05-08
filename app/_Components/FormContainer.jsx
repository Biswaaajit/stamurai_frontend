function FormContainer({ children, handleForm }) {
  return (
    <form
      onSubmit={handleForm}
      className="flex flex-col bg-slate-200/50 w-[95%] sm:w-[90%] md:w-[60%] lg:[45%] xl:w-[35%] px-8 py-10 gap-8 rounded-lg  h-fit transition-all"
    >
      {children}
    </form>
  );
}

export default FormContainer;
