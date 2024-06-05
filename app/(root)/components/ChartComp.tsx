"use client";
import { IchartData } from "./ChartSection";
import Chart from "./Chart";
import { FC } from "react";

interface ChartCompProps {
  chart: IchartData;
}

const ChartComp: FC<ChartCompProps> = ({ chart }) => {
  const data = [
    {
      name: "upcoming",
      value: chart.upcoming,
    },
    {
      name: "onGoing",
      value: chart.onGoing,
    },
    {
      name: "completed",
      value: chart.completed,
    },
  ];
  return (
    <div
      className="flex
    bg-white
   flex-col 
   rounded-xl 
   h-[17rem] 
   shadow-md 
   p-4
   "
    >
      <h1 className="font-semibold">{chart.title}</h1>

      <Chart data={data} />

      <section
        className="flex
        flex-col
        gap-2
        text-sm
      "
      >
        <div
          className="flex 
        px-4 
        py-1 
        items-center
        justify-between
        bg-gradient-to-l
        from-[#FFCB49]
        rounded-lg
        "
        >
          <h1>Upcoming</h1>
          <h1>{chart.upcoming}</h1>
        </div>
        <div
          className="flex 
        px-4 
        py-1 
        items-center
        justify-between
        bg-gradient-to-l
        from-[#7464FF]
              rounded-lg
        "
        >
          <h1>Ongoing</h1>
          <h1>{chart.onGoing}</h1>
        </div>
        <div
          className="flex 
        px-4 
        py-1 
        items-center
        justify-between
        bg-gradient-to-l
        from-[#4FD2B5]
              rounded-lg
        "
        >
          <h1>Completed</h1>
          <h1>{chart.completed}</h1>
        </div>
      </section>
    </div>
  );
};

export default ChartComp;
