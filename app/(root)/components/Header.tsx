import { Separator } from "@/components/ui/separator";
import { Bell, EllipsisVertical, Search } from "lucide-react";

const Header = () => {
  return (
    <>
      <header className="flex justify-between w-full">
        <h1 className="text-4xl">Dashboard</h1>
        <div className="bg-white items-center px-5 rounded-full flex gap-3 py-2">
          <Search size={20} className="text-neutral-600 cursor-pointer" />
          <Separator orientation="vertical" />
          <Bell size={20} className="text-neutral-600 cursor-pointer" />
          <Separator orientation="vertical" />
          <EllipsisVertical
            size={20}
            className="text-neutral-600 cursor-pointer"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
