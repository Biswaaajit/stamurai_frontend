import Image from "next/image";

function SmallNavImage({ userImage }) {
  return (
    <div className="w-[8rem] h-[8rem] relative">
      <Image
        src={userImage}
        fill
        alt="User image"
        className="object-center object-cover rounded-full"
      />
    </div>
  );
}

export default SmallNavImage;
