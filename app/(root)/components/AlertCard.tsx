import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import React, { FC } from "react";

interface AlertCardProps {
  alert: {
    icon: LucideIcon;
    title: string;
    date: string;
    loadNo: number;
    billTo: string;
    description: string;
  };
}

const AlertCard: FC<AlertCardProps> = ({ alert }) => {
  return (
    <div
      className="flex
    bg-white
    flex-col
    gap-3
    p-3
    rounded-md
  "
    >
      <div
        className="flex
        gap-2
    "
      >
        <Button className="min-w-10 bg-slate-400" size="icon">
          <alert.icon size={20} />
        </Button>
        <div>
          <h1 className="font-semibold">{alert.title}</h1>
          <h1 className="text-xs">
            Load No:{alert.loadNo}, Bill To:{alert.billTo}
          </h1>
        </div>
        <h1 className="text-sm whitespace-nowrap ml-auto">{alert.date}</h1>
      </div>

      <h1>{alert.description}</h1>

      <footer
        className="
    flex 
    justify-end
    gap-5
    "
      >
        <Button variant="ghost" className="underline">
          Ignore
        </Button>
        <Button className="bg-blue-900">Resolve</Button>
      </footer>
    </div>
  );
};

export default AlertCard;
