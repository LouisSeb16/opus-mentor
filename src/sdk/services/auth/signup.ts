import { opusMentorStore } from "@/sdk";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from 'react-firebase-hooks/auth';

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

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    const signIn = async () => {
        const result = await signInWithPopup(auth, provider);
    }

    const signOut = () => auth.signOut();


    return {
        store: {
            userData,
            isLoggedIn,
            authLoading,
            authMessage,
            user,
            loading
        },
        action: {
            setUser,
            setLoggedIn,
            setAuthLoading,
            setAuthMessage,
            signIn,
            signOut,
            push
        }
    };
}