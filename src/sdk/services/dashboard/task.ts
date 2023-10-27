import { opusMentorStore } from "@/sdk";
import { constants } from "@/sdk/config";

export default () => {
    const { authStore, dashboardStore } = opusMentorStore.zustand;
    const { useDashboardStore } = dashboardStore;

    const {
        tasks,
        taskId,
        taskCreatedByUser,
        openCreateTaskModal,
        newTaskCreated,
        taskTitle,
        taskDescription,
        taskCategory,
        taskDueDate,
        taskPriority,
        taskStatus,
        setOpenCreateTaskModal,
        setNewTaskCreated,
        setTaskTitle,
        setTaskDescription,
        setTaskCategory,
        setTaskDueDate,
        setTaskPriority,
        setTaskStatus,
        createTask,
        updateTask,
        deleteTask,
        editTask

    } = useDashboardStore((state: any) => ({
        tasks: state.tasks,
        taskId: state.taskId,
        taskCreatedByUser: state.taskCreatedByUser,
        openCreateTaskModal: state.openCreateTaskModal,
        newTaskCreated: state.newTaskCreated,
        taskTitle: state.taskTitle,
        taskDescription: state.taskDescription,
        taskCategory: state.taskCategory,
        taskDueDate: state.taskDueDate,
        taskPriority: state.taskPriority,
        taskStatus: state.taskStatus,
        setOpenCreateTaskModal: state.setOpenCreateTaskModal,
        setNewTaskCreated: state.setNewTaskCreated,
        setTaskTitle: state.setTaskTitle,
        setTaskDescription: state.setTaskDescription,
        setTaskCategory: state.setTaskCategory,
        setTaskDueDate: state.setTaskDueDate,
        setTaskPriority: state.setTaskPriority,
        setTaskStatus: state.setTaskStatus,
        createTask: state.createTask,
        updateTask: state.updateTask,
        deleteTask: state.deleteTask,
        editTask: state.editTask
    }));

    const notStartedTasks = tasks.filter((data: any) => data.taskStatus === constants.tasksStatus.default);
    const taskInProgress = tasks.filter((data: any) => data.taskStatus === constants.tasksStatus.InProgress);
    const completedTasks = tasks.filter((data: any) => data.taskStatus === constants.tasksStatus.completed);
    const expiredTasks = tasks.filter((data: any) => data.taskStatus === constants.tasksStatus.expired);

    const overViewData = {
        upComing: notStartedTasks.length,
        progress: taskInProgress.length,
        done: completedTasks.length,
        expired: expiredTasks.length
    }

    const taskSortedData = {
        upComing: notStartedTasks,
        progress: taskInProgress,
        done: completedTasks,
        expired: expiredTasks
    }

    const clearForm = () => {
        setOpenCreateTaskModal(false);
        setTaskTitle("");
        setTaskDescription('');
        setTaskStatus('');
        setTaskPriority('');
        setTaskCategory('');
        setTaskDueDate('');
    }

    const handleCreateNewTask = () => {
        let taskData = {
            taskCreatedByUser,
            openCreateTaskModal,
            taskTitle,
            taskDescription,
            taskCategory,
            taskDueDate,
            taskPriority,
            taskStatus
        }
        createTask(taskData);
        clearForm();
    }

    const handleDeleteTask = (taskId: string) => {
        let newArr = tasks.filter((data: any) => data.taskId !== taskId);
        updateTask(newArr);
    }

    return {
        store: {
            tasks,
            taskId,
            taskCreatedByUser,
            openCreateTaskModal,
            newTaskCreated,
            taskTitle,
            taskDescription,
            taskCategory,
            taskDueDate,
            taskPriority,
            taskStatus,
            overViewData,
            taskSortedData
        },
        actions: {
            setOpenCreateTaskModal,
            setNewTaskCreated,
            setTaskTitle,
            setTaskDescription,
            setTaskCategory,
            setTaskDueDate,
            setTaskPriority,
            setTaskStatus,
            createTask,
            deleteTask,
            editTask,
            handleCreateNewTask,
            clearForm,
            handleDeleteTask
        }
    }
}