import Image from "next/image";
import { useSelector } from "react-redux";

function UserInfo() {
  const { userImage, userName } = useSelector((store) => store.user);
  const imageToShow = userImage || "https://i.pravatar.cc/300";

  return (
    <div className="flex flex-col justify-center items-center gap-1.5">
      <div className="relative w-[12em] h-[12rem]">
        <Image
          src={imageToShow}
          alt="user Image"
          fill
          priority
          className="rounded-full object-center object-cover"
        />
      </div>
      <p className="font-semibold text-xl capitalize">{userName}</p>
    </div>
  );
}

export default UserInfo;
