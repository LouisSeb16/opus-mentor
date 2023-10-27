import { dashboardGeneralServices } from "@/sdk/services/dashboard"
import { useEffect } from "react";

export default () => {
    const dGeneralServices = dashboardGeneralServices.default();
    const {
        store: { user, userData, isLoggedIn },
        action: {
            push, signOut, setUser, setLoggedIn,
        }
    } = dGeneralServices;

    useEffect(() => {
        if (!user && !userData) {
            push('/');
            setUser(null);
            setLoggedIn(false);
        }
    }, [user, userData]);
    return dGeneralServices;
}