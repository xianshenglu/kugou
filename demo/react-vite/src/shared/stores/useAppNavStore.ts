import { create } from 'zustand'
import type { StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'

type AppNavState = {
  activeIndex: number
  setActiveNavIndex: (index: number) => void
}

const createState: StateCreator<AppNavState> = (set) => ({
  activeIndex: 0,
  setActiveNavIndex: (index: number) => set(() => ({ activeIndex: index }))
})

const useAppNavStore = create<AppNavState>()(
  // if we use same name for different stores, it will be merged into one store
  // but redux-devtools will often be stuck, don't know why.
  devtools(createState, { name: 'zustand-appNav', store: 'appNav' })
)

export default useAppNavStore
