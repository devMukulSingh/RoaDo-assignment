"use client";
import { Separator } from "@/components/ui/separator";
import { LucideIcon } from "lucide-react";
import React, { FC } from "react";

interface ActionProps {
  action: {
    name: string;
    icon: LucideIcon;
  };
}

const Action: FC<ActionProps> = ({ action }) => {
  return (
    <div className="flex gap-10">
      <div
        className="flex
    flex-col
    gap-2
    cursor-pointer
    items-center
    "
      >
        <action.icon />
        {action.name}
      </div>
      <Separator orientation="vertical" />
    </div>
  );
};

export default Action;
