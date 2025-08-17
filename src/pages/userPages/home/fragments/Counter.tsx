"use client"

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export const Counter =  (props: any) => {
    const {total} = props
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, total, { duration: 2 })
        return () => controls.stop()
    }, [])

    return <motion.pre >{rounded}</motion.pre>
}



