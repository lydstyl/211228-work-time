import { useContext } from "react"
import ClickDatesContext from "../clickDatesContext"

function useClickDatesWithContext() {
    const clickDatesContext = useContext(ClickDatesContext)
    const { clickDates, setClickDates } = clickDatesContext

    return { clickDates, setClickDates }
}

export default useClickDatesWithContext
