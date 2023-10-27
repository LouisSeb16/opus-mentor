import React from "react";
import dynamic from "next/dynamic";
import LoadingComponent from "@/components/shared/loader";

const OverviewComponent = dynamic(
  () => import("@/components/features/dashboard/overview"),
  { ssr: false, loading: () => <LoadingComponent/> }
);

const Overview = () => {
  return <OverviewComponent />;
};

export default Overview;
