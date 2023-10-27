import { ITaskStore } from "@/sdk/interface/zustand/dashboard";
import { userID } from "@/sdk/utils";
import { create } from "zustand";
import { createJSONStorage, persist, devtools } from 'zustand/middleware';


export const useDashboardStore = create<ITaskStore>()(
    devtools(
        persist(
            (set) => ({
                tasks: [],
                taskId: "",
                taskCreatedByUser: "",

                newTaskCreated: false,
                setNewTaskCreated: (param: boolean) => {
                    set({ newTaskCreated: param });
                },

                openCreateTaskModal: false,
                setOpenCreateTaskModal: (param: boolean) => {
                    set({ openCreateTaskModal: param });
                    set({ newTaskCreated: false })
                },

                taskTitle: "",
                setTaskTitle: (title: any) => {
                    set(() => ({
                        taskTitle: title
                    }))
                },

                taskDescription: '',
                setTaskDescription: (data: any) => {
                    set(() => ({
                        taskDescription: data
                    }))
                },

                taskCategory: "",
                setTaskCategory: (data: any) => {
                    set(() => ({ taskCategory: data }))
                },

                taskDueDate: "",
                setTaskDueDate: (data: any) => {
                    set(() => ({ taskDueDate: data }))
                },

                taskPriority: "",
                setTaskPriority: (data: any) => {
                    set(() => ({ taskPriority: data }))
                },

                taskStatus: "",
                setTaskStatus: (data: any) => {
                    set(() => ({ taskStatus: data }))
                },

                createTask: (taskData: any) => {
                    let Id = userID.generateUUID();
                    set((state: any) => ({
                        tasks: [...state.tasks,
                        {
                            taskTitle: taskData.taskTitle,
                            taskDescription: taskData.taskDescription,
                            taskCategory: state.taskCategory,
                            taskDueDate: state.taskDueDate,
                            taskPriority: state.taskPriority,
                            taskStatus: state.taskStatus,
                            taskId: Id
                        }]
                    }));

                    set({ newTaskCreated: true });
                },

                updateTask: (newData: any) => {
                    set(() => ({
                        tasks: newData
                    }));
                },

                deleteTask: () => {
                    console.log("[Deleted]")
                },

                editTask: () => {
                    console.log("[Edited]")
                },
            }),
            {
                name: 'Opus-mentor-task',
                storage: createJSONStorage(() => localStorage),
            }
        )
    )
); 