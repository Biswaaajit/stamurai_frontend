import { useRouter } from "next/navigation";

function ErrorPage({ error }) {
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <p className="text-red-600 text-xl">Error: {error}</p>
      <button
        className="bg-slate-400/40 rounded-md w-fit px-4 py-1"
        onClick={() => router.push("/")}
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorPage;
