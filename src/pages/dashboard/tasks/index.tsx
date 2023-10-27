import React from 'react'
import dynamic from "next/dynamic";
import LoadingComponent from "@/components/shared/loader";

const TasksComponent = dynamic(
  () => import("@/components/features/dashboard/tasks"),
  { ssr: false, loading: () => <LoadingComponent/> }
);

const TaskPage = () => {
  return (
    <TasksComponent/>
  )
}

export default TaskPage