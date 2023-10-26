import { opusMentorStore } from "@/sdk";
import { authServices } from "..";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

export default () => {
    const authenticationServices = authServices.signupService.default();
    // const {
    //     store: {
    //         userData,
    //         isLoggedIn,
    //     },
    //     action: {
    //         push
    //     }
    // } = authenticationServices;

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
    } = useAuthStore((state: any) => ({
        userData: state.userData,
        isLoggedIn: state.isLoggedIn,
        authLoading: state.authLoading,
        authMessage: state.authMessage,
        setUser: state.setUser,
        setLoggedIn: state.setIsLoggedIn,
        setAuthLoading: state.setAuthLoading,
        setAuthMessage: state.setAuthMessage,
    }));

    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    const signOut = () => auth.signOut();


    return {
        store: { user, userData, isLoggedIn },
        action: {
            push, signOut, setUser, setLoggedIn,
        }
    }
}