import { create } from 'zustand'

interface DarkModeState {
    isDarkMode: boolean
    changeMode: () => void
}

const useDarModeStore = create<DarkModeState>()((set) => ({
  isDarkMode: false,
  changeMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useDarModeStore;