'use client'
import { create } from 'zustand'
interface darkModeState {
    darkMode: boolean
    setTheme: any
}
const useTheme = create<darkModeState>(
    (set) => ({
        darkMode: true,
        setTheme: () => {
            set((state) => {
                return {
                    darkMode: !state.darkMode
                }
            })
        }
    })
)

export default useTheme