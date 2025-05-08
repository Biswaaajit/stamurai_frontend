import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import SmallNav from "./SmallNav";

function NavForSmallWindow() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-between items-center py-2 px-2.5 relative">
      <p>Taskify</p>
      <button onClick={() => setShow(true)} className="text-2xl">
        <IoMenu />
      </button>
      {show && <SmallNav setShow={setShow} />}
    </div>
  );
}

export default NavForSmallWindow;
