"use client";
import Action from "./Action";
import { actions } from "@/lib/constants";

const QuickActions = () => {
  return (
    <div
      className="
    grid
    grid-cols-2
    lg:grid-cols-5
    md:grid-cols-3
    bg-white 
    rounded-lg
    px-10
    py-5
    justify-between
    "
    >
      {actions.map((action, index) => (
        <Action action={action} key={index} />
      ))}
    </div>
  );
};

export default QuickActions;
