import React, { FC } from "react";

interface ActivityCardProps {
  activity: string;
}

const ActivityCard: FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="border p-3 rounded-md">
      <h1 className="text-neutral-500 text-xs">{activity}</h1>
    </div>
  );
};

export default ActivityCard;
