import Link from "next/link";
import UserImage from "./UserImage";

function UserCard({ user }) {
  const { userImage, userName, _id } = user;
  return (
    <Link
      href={`/home/${_id}`}
      className="w-[70%] bg-slate-400/30  flex flex-col items-center py-3  rounded-lg gap-3"
    >
      <UserImage userImage={userImage} />
      <p className="capitalize font-semibold text-nowrap">{userName}</p>
    </Link>
  );
}

export default UserCard;
