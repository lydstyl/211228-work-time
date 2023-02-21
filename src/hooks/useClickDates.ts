import { useState } from "react"
import { ClickDate } from "../types/types"

export default function useClickDates() {
    const localDates = localStorage.getItem("localClickDates")
    let initialDates = []
    if (localDates) {
        initialDates = JSON.parse(localDates)
    }

    const [clickDates, setClickDates] = useState<ClickDate[]>(initialDates)

    return { clickDates, setClickDates }
}
