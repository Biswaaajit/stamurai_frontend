import NavLink from "./Navlinks";
import UserInfo from "./UserInfo";

function NavForWindow() {
  return (
    <div className="w-full h-full flex flex-col py-4">
      <UserInfo />
      <div className="w-full grow  flex flex-col justify-center gap-6 items-center">
        <NavLink href="/home" name="Home" />
        <NavLink href="/home/createTask" name="Create Task" />
        <NavLink href="/home/assignedWork" name="Assigned Task" />
        <NavLink href="/home/notification" name="Notifications" />
      </div>
    </div>
  );
}

export default NavForWindow;
