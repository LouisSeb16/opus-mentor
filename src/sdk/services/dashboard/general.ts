import { opusMentorStore } from "@/sdk";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

export default () => {
    const { authStore } = opusMentorStore.zustand;
    const { useAuthStore } = authStore;
    const { push } = useRouter();

    const {
        userData,
        isLoggedIn,
        authLoading,
        authMessage,
        //functions
        setUser,
        setLoggedIn,
        setAuthLoading,
        setAuthMessage,
        signOutUser
    } = useAuthStore((state: any) => ({
        userData: state.userData,
        isLoggedIn: state.isLoggedIn,
        authLoading: state.authLoading,
        authMessage: state.authMessage,
        setUser: state.setUser,
        setLoggedIn: state.setIsLoggedIn,
        setAuthLoading: state.setAuthLoading,
        setAuthMessage: state.setAuthMessage,
        signOutUser: state.signOutUser
    }));

    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    const signOut = () => {
        auth.signOut();
        signOutUser();
    }


    return {
        store: { user, userData, isLoggedIn },
        action: {
            push, signOut, setUser, setLoggedIn,
        }
    }
}