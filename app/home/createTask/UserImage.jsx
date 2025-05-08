import Image from "next/image";

function UserImage({ userImage }) {
  return (
    <div className="w-[20vw] h-[20vw] sm:w-[8rem] sm:h-[8rem] relative">
      <Image
        src={userImage}
        fill
        alt="workers image"
        className="object-center object-cover rounded-full"
      />
    </div>
  );
}

export default UserImage;
