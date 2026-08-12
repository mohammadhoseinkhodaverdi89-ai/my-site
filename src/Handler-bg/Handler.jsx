import { use } from "framer-motion/client";
import { create } from "zustand";
const useBackGroundChange = create((set) => ({
    isdark: true,
    toggle: () => {
        set((state) => ({
            isdark: !state.isdark
        }))
    }
}
))
export default useBackGroundChange