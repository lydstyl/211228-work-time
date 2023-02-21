import { useContext } from "react"
import ClickDatesContext from "../contexts/clickDatesContext"

function useClickDatesWithContext() {
    const clickDatesContext = useContext(ClickDatesContext)
    const { clickDates, setClickDates } = clickDatesContext

    return { clickDates, setClickDates }
}

export default useClickDatesWithContext
