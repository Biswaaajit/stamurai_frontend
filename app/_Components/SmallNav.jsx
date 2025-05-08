import { useSelector } from "react-redux";
import SmallNavImage from "./SmallNavImage";
import { RxCrossCircled } from "react-icons/rx";
import SmallNavLinks from "./SmallNavLinks";

function SmallNav({ setShow }) {
  const { userImage, userName } = useSelector((store) => store.user);

  return (
    <div className="h-screen w-full flex absolute left-0 top-0 bg-slate-400/50 z-30">
      <div className="w-[60%] bg-slate-100 h-full flex flex-col items-center py-3">
        <button
          onClick={() => setShow(false)}
          className="w-fit self-end pr-2 text-2xl text-red-900 hover:text-red-600 pb-4 transition-all"
        >
          <RxCrossCircled />
        </button>
        <SmallNavImage userImage={userImage} />
        <p className="capitalize font-semibold text-xl pt-2">{userName}</p>
        <div className="w-full py-7 space-y-4">
          <SmallNavLinks link="/home" name="Home" setShow={setShow} />
          <SmallNavLinks
            link="/home/assignedWork"
            name="Assign Task"
            setShow={setShow}
          />
          <SmallNavLinks
            link="/home/createTask"
            name="Create Task"
            setShow={setShow}
          />
          <SmallNavLinks
            link="/home/notification"
            name="Notifications"
            setShow={setShow}
          />
        </div>
      </div>
      <div className="grow bg-transparent"></div>
    </div>
  );
}

export default SmallNav;
