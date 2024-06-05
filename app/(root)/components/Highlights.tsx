import React from "react";
import IncomeCard from "./IncomeCard";
import ExpensesCard from "./ExpensesCard";
import CompletedActivities from "./CompletedActivities";
import ScheduledActivities from "./ScheduledActivities";

const Highlights = () => {
  return (
    <div
      className="bg-white
     w-[35rem] 
     min-h-screen 
     flex 
     p-5
     flex-col
     gap-3
     "
    >
      <h1 className="text-2xl font-semibold">Todays Highlight(14)</h1>
      <h1
        className="
      text-neutral-500
      text-sm
      "
      >
        19 Mar 2024
      </h1>
      <div
        className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-5
      "
      >
        <IncomeCard />
        <ExpensesCard />
      </div>
      <CompletedActivities />
      <ScheduledActivities />
    </div>
  );
};

export default Highlights;
