import { alerts } from "@/lib/constants";
import React from "react";
import AlertCard from "./AlertCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
const PriorityAlerts = () => {
  return (
    <div
      className="
        flex
        flex-col
        gap-5
    "
    >
      <div
        className="
            flex
            justify-between
        "
      >
        <h1
          className="
            font-semibold
            text-xl
            "
        >
          High Priority alerts(4)
        </h1>
        <Button className="flex gap-2" variant="ghost">
          View All
          <ChevronRight />
        </Button>
      </div>
      <div
        className="
            flex
            flex-col
            md:flex-row
            gap-10
        "
      >
        {alerts.map((alert, index) => (
          <AlertCard alert={alert} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PriorityAlerts;
