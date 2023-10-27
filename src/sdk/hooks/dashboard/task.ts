import { taskServices } from "@/sdk/services/dashboard"
import { useEffect } from "react";

export default () => {

    const taskServ = taskServices.default();

    useEffect(() => {},[])

    return taskServ
}