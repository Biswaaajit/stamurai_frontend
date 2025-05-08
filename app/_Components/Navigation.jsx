"use client";
import { useSelector } from "react-redux";
import NavForSmallWindow from "./NavForSmallWindow";
import NavForWindow from "./NavForWindow";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const { loginStatus } = useSelector((store) => store.user);
  const router = useRouter();
  useEffect(() => {
    if (!loginStatus) {
      router.push("/");
    }
  }, []);
  return (
    <div className="w-full lg:w-[30%] xl:w-[25%] h-fit lg:h-full">
      <div className="block lg:hidden bg-red-400 h-full">
        <NavForSmallWindow />
      </div>
      <div className="hidden lg:block h-full border-r-2 border-slate-200/80">
        <NavForWindow />
      </div>
    </div>
  );
}
