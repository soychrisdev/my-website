'use client'
import { create } from 'zustand'


interface IStore {
    darkMode: boolean;
    setTheme: (state: any) => void;
    myProjects: [];
    setProjects: (params: any) => void;
}


const store = create<IStore>(
    (set) => ({
        darkMode: true,
        myProjects: [],
        setTheme: () => {
            set((state) => {
                return {
                    darkMode: !state.darkMode
                }
            })
        },
        setProjects: (params: any) => {
            const { newProject } = params
            set((projects: any) => {
                const newMyProjects = [...projects.myProjects, newProject]
                return {
                    ...projects,
                    myProjects: newMyProjects
                }
            })
        }
    })
)

export default store