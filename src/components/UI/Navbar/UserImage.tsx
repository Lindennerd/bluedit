import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";

interface UserImageProps {
  height: number;
  width: number;
}

export function UserImage({ height, width }: UserImageProps) {
  const { data: session, status } = useSession();
  const [image, setImage] = useState("");

  useEffect(() => {
    if (status === "authenticated") setImage(session!.user!.image!);
  }, [status]);

  if (image)
    return (
      <Image
        src={image}
        height={height}
        width={width}
        className="rounded-full"
      />
    );
  else return <BiUserCircle className="text-2xl" />;
}
