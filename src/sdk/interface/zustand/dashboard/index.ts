export type userState = {
    data: string;
}

export type ITaskStore = {
    tasks: any,
    taskTitle: string;
    setTaskTitle: (data: userState['data']) => void;
    taskDescription: string;
    setTaskDescription: (data: userState['data']) => void;
    taskCategory: string;
    setTaskCategory: (data: userState['data']) => void;
    taskDueDate?: any;
    setTaskDueDate: (data: userState['data']) => void;
    taskPriority: any;
    setTaskPriority: (data: userState['data']) => void;
    taskStatus: string;
    setTaskStatus: (data: userState['data']) => void;
    taskCreatedByUser: string;
    taskId: any;
    openCreateTaskModal: boolean;
    setOpenCreateTaskModal: (data: boolean) => void;
    newTaskCreated: boolean;
    setNewTaskCreated: (data: boolean) => void;
    createTask: (data: any) => void;
    updateTask: (data: any) => void;
    deleteTask: () => void;
    editTask: () => void;
}