import { create } from 'zustand'
import type { StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'

type AppNavState = {
  activeIndex: number
  isShow: boolean
  setActiveNavIndex: (index: number) => void
  switchNav: (isShow: boolean) => void
}

const createState: StateCreator<AppNavState> = (set) => ({
  activeIndex: 0,
  isShow: false,
  setActiveNavIndex: (index: number) => set(() => ({ activeIndex: index })),
  switchNav: (isShow: boolean) => set(() => ({ isShow }))
})

const useAppNavStore = create<AppNavState>()(devtools(createState))

export default useAppNavStore
