import {create} from 'zustand';

interface AuthState {
    isLoginOpen: boolean
    openLoginModal: () => void
    closeLoginModal: () => void

    isSignInOpen: boolean
    openSignInModal: () => void
    closeSignInModal: () => void
}

const useAuthStore = create<AuthState>()((set) => (
    {
        isLoginOpen: false,
        openLoginModal: () => set({isLoginOpen: true}),
        closeLoginModal: () => set({isLoginOpen: false}),

        isSignInOpen: false,
        openSignInModal: () => set({isSignInOpen: true}),
        closeSignInModal: () => set({isSignInOpen: false}),
    }
));

export default useAuthStore;