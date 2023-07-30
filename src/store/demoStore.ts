import { create } from 'zustand'

/**
 * @file: three.js 相关 store
 */
export interface DemoStoreProps {
  demo: number
  setDemo: (demo: number) => void

}

const demoStore = create<DemoStoreProps>(set => ({
  demo: 1,
  setDemo: demo => set({ demo }),
}))

export type DemoStoreType = typeof demoStore

export default demoStore
