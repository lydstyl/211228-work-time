import React from "react"
import { createContext } from "react"
import { ClickDate } from "./types/types"

type ClickDatesContext = {
    clickDates: ClickDate[]
    setClickDates: React.Dispatch<React.SetStateAction<ClickDate[]>>
}

const clickDatesContext = createContext<ClickDatesContext>({
    clickDates: [],
    setClickDates: () => [],
})

export default clickDatesContext
