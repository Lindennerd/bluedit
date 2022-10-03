import { TbError404 } from "react-icons/tb";

export default function NotFoundPage() {
  return (
    <div className="flex justify-center items-center h-screen w-screen gap-4">
      <TbError404 className="text-8xl" /> <div>Not Found</div>
    </div>
  );
}
