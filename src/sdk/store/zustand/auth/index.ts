import { IAuthStore } from "@/sdk/interface/zustand/auth";
import { create } from "zustand";
import { createJSONStorage, persist, devtools } from 'zustand/middleware';

export const useAuthStore = create<IAuthStore>()(
    devtools(
        persist(
            (set) => ({
                userData: null,
                isLoggedIn: false,
                authLoading: false,
                authMessage: '',
                setUser: (userData: any) => {
                    set(() => ({
                        userData: userData
                    }));
                },
                setIsLoggedIn: (param: boolean) => {
                    set({ isLoggedIn: param });
                },
                setAuthLoading: (param: boolean) => {
                    set({ authLoading: param });
                },
                setAuthMessage: (data: any) => {
                    set(() => ({
                        authMessage: data
                    }));
                }
            }),
            {
                name: 'Opus-mentor',
                storage: createJSONStorage(() => localStorage),
            }
        )
    )
); 