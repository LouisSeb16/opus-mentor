export type userState = {
    data: string;
}

export type IAuthStore = {
    userData: any,
    setUser: (data: userState['data']) => void;
    isLoggedIn: boolean;
    setIsLoggedIn: (param: boolean) => void;
    authLoading: boolean;
    setAuthLoading: (param: boolean) => void;
    authMessage: string;
    setAuthMessage: (data: userState['data']) => void;
}