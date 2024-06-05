import { Button } from "@/components/ui/button";
import { completedActivites } from "@/lib/constants";
import React from "react";
import ActivityCard from "./ActivityCard";

const ScheduledActivities = () => {
  return (
    <div
      className="
        flex
        flex-col
    "
    >
      <div
        className="
            flex
            items-center
            justify-between
        "
      >
        <h1 className="font-semibold">Scheduled Activities(14)</h1>
        <Button className="underline hover:bg-transparent" variant="ghost">
          View All
        </Button>
      </div>

      {completedActivites.map((activity, index) => (
        <ActivityCard activity={activity} key={index} />
      ))}
    </div>
  );
};

export default ScheduledActivities;
