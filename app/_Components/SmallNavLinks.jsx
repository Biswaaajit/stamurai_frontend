import { usePathname, useRouter } from "next/navigation";

function SmallNavLinks({ name, link, setShow }) {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === link;

  function handleLinks() {
    router.push(link);
    setShow(false);
  }

  return (
    <button
      onClick={handleLinks}
      className={`text-center font-semibold text-xl py-2  w-full ${
        isActive ? "bg-red-400" : "bg-slate-300/40 "
      }`}
    >
      {name}
    </button>
  );
}

export default SmallNavLinks;
