function FormContainer({ children, handlerFunc }) {
  return (
    <form
      onSubmit={handlerFunc}
      className="w-[80%] lg:w-[95%] h-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 xl:gap-y-8"
    >
      {children}
    </form>
  );
}

export default FormContainer;
