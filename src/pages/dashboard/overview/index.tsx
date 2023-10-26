import React from "react";
import dynamic from "next/dynamic";

const OverviewComponent = dynamic(
  () => import("@/components/features/dashboard/overview"),
  { ssr: false }
);

const Overview = () => {
  return <OverviewComponent />;
};

export default Overview;
