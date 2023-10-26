import { authServices } from "@/sdk/services"
import { useEffect } from "react";

export default () => {
    const signupServices = authServices.signupService.default();
    const {
        store: {
            user,
            loading
        },
        action: {
            setUser,
            setLoggedIn,
            setAuthLoading,
            setAuthMessage,
            signIn,
            push
        }
    } = signupServices;

    useEffect(() => {
        if (loading) {
            setAuthLoading(true);
            setAuthMessage("Logging in please wait.")
        } else {
            setAuthLoading(false);
            setAuthMessage(" ")
        }
    }, [loading]);

    useEffect(() => {
        if (user) {
            setUser(user);
            setLoggedIn(true);
            push('/dashboard/overview');
        }
    }, [user]);

    return signupServices;
}