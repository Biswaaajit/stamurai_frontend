import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, name }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-center font-semibold text-xl py-2  w-full ${
        isActive ? "bg-red-400 " : "bg-slate-300/40"
      }`}
    >
      {name}
    </Link>
  );
};

export default NavLink;
